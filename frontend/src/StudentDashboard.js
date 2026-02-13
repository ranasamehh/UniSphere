import React from 'react';

const StudentDashboard = () => {
    // Sample data based on Nada's requirements
    const courses = [
        { code: 'CS301', name: 'Database Systems', grade: 'A' },
        { code: 'CS302', name: 'Software Engineering', grade: 'B+' }
    ];

    const schedule = [
        { day: 'Monday', time: '10:00 AM', subject: 'Databases', room: 'Lab 1' },
        { day: 'Wednesday', time: '12:00 PM', subject: 'Software Eng', room: 'Hall A' }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Student Portal - My Academic Info</h1>
            
            <h2>Enrolled Courses & Grades</h2>
            <ul>
                {courses.map(c => (
                    <li key={c.code}><strong>{c.code}</strong>: {c.name} - Grade: {c.grade}</li>
                ))}
            </ul>

            <h2>Weekly Timetable</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Subject</th>
                        <th>Room</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((s, index) => (
                        <tr key={index}>
                            <td>{s.day}</td>
                            <td>{s.time}</td>
                            <td>{s.subject}</td>
                            <td>{s.room}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentDashboard;