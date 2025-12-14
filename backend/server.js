import "./config/env.js";
import express from "express";
import cors from "cors";
import db from "./db/connection.js";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Request logger middleware
app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.path}`, req.body);
  next();
});

// routes
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

app.get("/ping", (req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 5001;

db.getConnection()
  .then(() => {
    console.log("MySQL Connected ✔");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.log("DB Error:", err));
