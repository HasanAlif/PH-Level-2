import express, { type NextFunction, type Request, type Response } from "express";
import initDB, { pool } from "./config/db";
import config from "./config";


const app = express();
0
const port = config.port;

//parse json bodies
app.use(express.json());



initDB();

// Logger middleware

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the User and Todo Management API",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    path: req.path,
  });
});

app.post("/users", async (req: Request, res: Response) => {
  const { name, email, age, phone, address } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email, age, phone, address) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, age, phone, address],
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

app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully.",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: `User with id ${id} retrieved successfully.`,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.put("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, age, phone, address } = req.body;

  try {
    const existingUser = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

    if (existingUser.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found.`,
      });
    }

    const result = await pool.query(
      `UPDATE users SET name=$1, email=$2, age=$3, phone=$4, address=$5, updated_at=Now() WHERE id=$6 RETURNING *`,
      [name, email, age, phone, address, id],
    );

    res.status(200).json({
      success: true,
      message: `User with id ${id} updated successfully.`,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.delete("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const existingUser = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

    if (existingUser.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found.`,
      });
    }

    await pool.query(`DELETE FROM users WHERE id = $1`, [id]);

    res.status(200).json({
      success: true,
      message: `User with id ${id} deleted successfully.`,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Part of Todos

app.post("/todos", async (req: Request, res: Response) => {
  const { user_id, title, description, is_completed, due_date } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO todos(user_id, title, description, is_completed, due_date) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [user_id, title, description, is_completed, due_date],
    );
    console.log(result.rows[0]);
    res.status(201).json({
      success: true,
      message: `Todo "${title}" created for user ID ${user_id}.`,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/todos", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM todos`);
    res.status(200).json({
      success: true,
      message: "Todos retrieved successfully.",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/todos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Todo with id ${id} not found.`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Todo with id ${id} retrieved successfully.`,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.put("/todos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, is_completed, due_date } = req.body;
  try {
    const existingTodo = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
    if (existingTodo.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Todo with id ${id} not found.`,
      });
    }

    const result = await pool.query(
      `UPDATE todos SET title=$1, description=$2, is_completed=$3, due_date=$4, updated_at=Now() WHERE id=$5 RETURNING *`,
      [title, description, is_completed, due_date, id],
    );

    res.status(200).json({
      success: true,
      message: `Todo with id ${id} updated successfully.`,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.delete("/todos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const existingTodo = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
    if (existingTodo.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Todo with id ${id} not found.`,
      });
    }

    await pool.query(`DELETE FROM todos WHERE id = $1`, [id]);

    res.status(200).json({
      success: true,
      message: `Todo with id ${id} deleted successfully.`,
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
