import express from "express";
import bcrypt from "bcrypt";
import db from "../db/connection.js";
import jwt from "jsonwebtoken";

console.log("Auth routes loaded ✅");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Auth route working" });
});


router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [existingUser] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/login", async (req, res) => {
  console.log("Login route called");
  try {
    const { email, password } = req.body;

    // 1. validate Input
    if (!email || !password) {
      return res.status(400).json({ message: "Enter Email and Password" });
    }

    // 2. find user 
    const [users] = await db.query(
      "SELECT id, name, email, password FROM users WHERE email = ?", [email]
    );

    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = users[0];

    // 3. compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 4. success 
    if (!process.env.JWT_SECRET) {
      console.error("ERROR: JWT_SECRET is missing!");
      return res.status(500).json({ message: "Server configuration error" });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;  
