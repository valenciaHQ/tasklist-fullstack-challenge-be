import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tasklist",
  password: "admin",
  port: 5432, // or the port you are using for PostgreSQL
});

export default pool;
