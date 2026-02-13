import React, { useState } from 'react';

const StudentDashboard = () => {
    // 1. This "state" stores your history. 
    // It starts with the two items you mentioned.
    const [requests, setRequests] = useState([
        { id: 1, type: 'Official Transcript', date: '13-Feb-2026', status: 'Pending Approval', color: 'orange' },
        { id: 2, type: 'Enrollment Certificate', date: '01-Jan-2026', status: 'Completed', color: 'green' }
    ]);

    // 2. This function runs when you click the button
    const handleNewRequest = () => {
        const newEntry = {
            id: requests.length + 1,
            type: 'Official Transcript',
            date: new Date().toLocaleDateString(), // Today's date
            status: 'Pending Approval',
            color: 'orange'
        };
        // This adds the new entry to the table automatically!
        setRequests([newEntry, ...requests]);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'left', fontFamily: 'Arial' }}>
            <h1>Student Portal - Welcome Nada</h1>
            <hr />

            {/* Attendance Section */}
            <section style={{ marginBottom: '30px' }}>
                <h2>Attendance Summary</h2>
                <p>Database Systems: <strong>92%</strong></p>
                <p>Software Engineering: <strong>85%</strong></p>
            </section>

            {/* Action Button */}
            <button 
                onClick={handleNewRequest}
                style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}
            >
                Request New Transcript
            </button>

            {/* Your History Table */}
            <div style={{ marginTop: '30px' }}>
                <h3>Request History</h3>
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#f2f2f2' }}>
                        <tr>
                            <th style={{ padding: '10px' }}>Document</th>
                            <th style={{ padding: '10px' }}>Date Submitted</th>
                            <th style={{ padding: '10px' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((item) => (
                            <tr key={item.id}>
                                <td style={{ padding: '10px' }}>{item.type}</td>
                                <td style={{ padding: '10px' }}>{item.date}</td>
                                <td style={{ padding: '10px', color: item.color, fontWeight: 'bold' }}>
                                    {item.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentDashboard;