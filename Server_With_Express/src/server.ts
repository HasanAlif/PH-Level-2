import express, { type Request, type Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

//parse json bodies
app.use(express.json());

// Postgres connection pool
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STRING}`,
});

const initDB = async () => {
  // Drop existing tables to recreate with correct schema
  await pool.query(`DROP TABLE IF EXISTS todos CASCADE`);
  await pool.query(`DROP TABLE IF EXISTS users CASCADE`);

  await pool.query(`
    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT  Now(),
    updated_at TIMESTAMP DEFAULT Now()
    )
  `);

  await pool.query(`
    CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    due_date DATE,
    created_at TIMESTAMP DEFAULT Now(),
    updated_at TIMESTAMP DEFAULT Now()
    )
    `);

  // // Insert sample users if table is empty
  // const userCount = await pool.query("SELECT COUNT(*) FROM users");
  // if (userCount.rows[0].count === "0") {
  //   await pool.query(`
  //     INSERT INTO users (name, email, age, phone, address) VALUES
  //     ('John Doe', 'john@example.com', 25, '123-456-7890', '123 Main St'),
  //     ('Jane Smith', 'jane@example.com', 30, '098-765-4321', '456 Oak Ave'),
  //     ('Bob Johnson', 'bob@example.com', 28, '555-123-4567', '789 Pine Rd')
  //   `);
  //   console.log("Sample users inserted");
  // }

  // // Insert sample todos if table is empty
  // const todoCount = await pool.query("SELECT COUNT(*) FROM todos");
  // if (todoCount.rows[0].count === "0") {
  //   await pool.query(`
  //     INSERT INTO todos (user_id, title, description, is_completed, due_date) VALUES
  //     (1, 'Learn TypeScript', 'Complete TypeScript tutorial', false, '2025-12-15'),
  //     (1, 'Build API', 'Create REST API with Express', false, '2025-12-20'),
  //     (2, 'Read Book', 'Finish reading Clean Code', true, '2025-12-01'),
  //     (3, 'Exercise', 'Go to gym 3 times this week', false, '2025-12-07')
  //   `);
  //   console.log("Sample todos inserted");
  // }
};

initDB();

app.post("/", async (req: Request, res: Response) => {
  const { name, email, age, phone, address } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email, age, phone, address) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, age, phone, address]
    );
    console.log(result.rows[0]);
    res.status(201).json({
      success: true,
      message: `User ${name} with email ${email} created.`,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
