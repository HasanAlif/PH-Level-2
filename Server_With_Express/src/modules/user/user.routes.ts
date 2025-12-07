import express from "express";
import { Request, Response } from "express";
import { pool } from "../../config/db";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
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

router.get("/", async (req: Request, res: Response) => {
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

router.get("/:id", async (req: Request, res: Response) => {
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

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, age, phone, address } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users SET name = $1, email = $2, age = $3, phone = $4, address = $5, updated_at = NOW() WHERE id = $6 RETURNING *`,
      [name, email, age, phone, address, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found.`,
      });
    }

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

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found.`,
      });
    }

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


export const userRoutes = router;