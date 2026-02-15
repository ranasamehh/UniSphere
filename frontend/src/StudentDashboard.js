import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/students')
            .then(response => response.json())
            .then(data => {
                setStudents(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Loading Student Records...</h3>;

    return (
        <div style={{ padding: '40px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
            <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>UniSphere Student Directory</h1>
            <p style={{ color: '#7f8c8d' }}>Viewing all enrolled students across departments.</p>
            <hr style={{ border: '0.5px solid #eee' }} />

            <div style={{ marginTop: '30px', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#34495e', color: 'white', textAlign: 'left' }}>
                            <th style={{ padding: '15px' }}>ID</th>
                            <th style={{ padding: '15px' }}>Full Name</th>
                            <th style={{ padding: '15px' }}>Email</th>
                            <th style={{ padding: '15px' }}>Phone</th>
                            <th style={{ padding: '15px' }}>GPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.student_id} style={{ borderBottom: '1px solid #f2f2f2' }}>
                                <td style={{ padding: '15px' }}>{student.student_id}</td>
                                <td style={{ padding: '15px' }}>{student.first_name} {student.last_name}</td>
                                <td style={{ padding: '15px' }}>{student.email}</td>
                                <td style={{ padding: '15px' }}>{student.phone_number}</td>
                                <td style={{ padding: '15px', fontWeight: 'bold', color: '#2980b9' }}>{student.gpa}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {students.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '20px', color: '#e74c3c' }}>
                    No students found. Please ensure your XAMPP database has records.
                </div>
            )}
        </div>
    );
};

export default StudentDashboard;