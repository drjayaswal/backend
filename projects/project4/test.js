import { pool } from "./app/api/database/db.js";

const [rows] = await pool.query("SELECT * FROM users");
console.log(rows);