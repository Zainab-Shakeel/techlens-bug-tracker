import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db/connection.js";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

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
