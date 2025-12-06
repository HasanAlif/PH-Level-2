import { Pool } from "pg";
import config from "./index";

// Postgres connection pool
export const pool = new Pool({
  connectionString: `${config.connection_string}`,
});

const initDB = async () => {
  // Create tables only if they don't exist
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
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
    CREATE TABLE IF NOT EXISTS todos(
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

export default initDB;