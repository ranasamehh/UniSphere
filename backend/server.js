const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'unisphere_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to unisphere_db');
});

// 1. Student Directory (All Students)
app.get('/api/students', (req, res) => {
  const sql = "SELECT student_id, first_name, last_name, email, gpa, phone_number FROM Students";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 2. Timetable (Using your columns: days, periods, building, room_number)
app.get('/api/timetable/:id', (req, res) => {
  const sql = `
    SELECT c.course_name, t.days, t.periods, cl.building, cl.room_number 
    FROM Time_table t
    JOIN Courses c ON t.course_id = c.course_id
    JOIN Classrooms cl ON t.classroom_id = cl.classroom_id
    JOIN Enrollments e ON c.course_id = e.course_id
    WHERE e.student_id = ?`;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 3. Exams (Using your columns: exam_type, exam_date, total_marks)
app.get('/api/exams/:id', (req, res) => {
  const sql = `
    SELECT c.course_name, ex.exam_type, ex.exam_date, ex.total_marks 
    FROM Exams ex
    JOIN Courses c ON ex.course_id = c.course_id
    JOIN Enrollments e ON c.course_id = e.course_id
    WHERE e.student_id = ?`;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 4. Attendance Summary
app.get('/api/attendance/:id', (req, res) => {
  const sql = `
    SELECT c.course_name, a.status 
    FROM Attendance a
    JOIN Enrollments e ON a.enrollment_id = e.enrollment_id
    JOIN Courses c ON e.course_id = c.course_id
    WHERE e.student_id = ?`;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(5000, () => console.log('Backend running on port 5000'));