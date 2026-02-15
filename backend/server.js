const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Create the Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Default XAMPP username
  password: '',      // Default XAMPP password is empty
  database: 'unisphere_db' // The database you created [cite: 1]
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to XAMPP MySQL Database (unisphere_db)');
});

// 2. API Route to get all students for the directory
app.get('/api/students', (req, res) => {
  // Querying the Students table from your schema [cite: 37]
const sql = "SELECT student_id, first_name, last_name, email, gpa, phone_number FROM Students";  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results); // Sends Alice, Bob, and Charlie to the frontend 
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});