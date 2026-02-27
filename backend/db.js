const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Default XAMPP user
  password: '',      // Default XAMPP password is empty
  database: 'unisphere_db' // The name of the DB you just created [cite: 1]
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to the UniSphere MySQL database!');
});

module.exports = connection;