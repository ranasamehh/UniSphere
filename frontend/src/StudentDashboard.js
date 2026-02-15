import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
    const studentId = 1; // Testing with Alice Miller
    const [timetable, setTimetable] = useState([]);
    const [exams, setExams] = useState([]);
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/timetable/${studentId}`).then(res => res.json()).then(setTimetable);
        fetch(`http://localhost:5000/api/exams/${studentId}`).then(res => res.json()).then(setExams);
        fetch(`http://localhost:5000/api/attendance/${studentId}`).then(res => res.json()).then(setAttendance);
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>UniSphere Student Portal</h1>

            <section>
                <h2>Your Timetable</h2>
                <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th>Course</th><th>Days</th><th>Time (Periods)</th><th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timetable.map((t, i) => (
                            <tr key={i}>
                                <td>{t.course_name}</td>
                                <td>{t.days}</td>
                                <td>{t.periods}</td>
                                <td>{t.building} - Room {t.room_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <section style={{ flex: 1 }}>
                    <h2>Exam Schedule</h2>
                    <ul>
                        {exams.map((ex, i) => (
                            <li key={i}>{ex.course_name}: {ex.exam_type} on {ex.exam_date} ({ex.total_marks} Marks)</li>
                        ))}
                    </ul>
                </section>

                <section style={{ flex: 1 }}>
                    <h2>Attendance Summary</h2>
                    {attendance.map((a, i) => (
                        <p key={i}>{a.course_name}: <strong>{a.status}</strong></p>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default StudentDashboard;