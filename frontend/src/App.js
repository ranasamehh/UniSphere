import React from 'react';
import StudentDashboard from './StudentDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* This tells React to show your Student Dashboard instead of the logo */}
      <StudentDashboard />
    </div>
  );
}

export default App;