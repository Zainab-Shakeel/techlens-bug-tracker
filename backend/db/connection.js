import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "PakistanNA@2025",
  database: "techlens",
});

export default db;
