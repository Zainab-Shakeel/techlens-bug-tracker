import usersRoutes from "./routes/users.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db/connection.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

db.getConnection()
  .then(() => console.log("MySQL Connected ✔"))
  .catch((err) => console.log("DB Error:", err));

app.get("/", (req, res) => {
  res.json({ message: "TechLens backend running" });
});

const PORT = process.env.PORT || 5000;
app.use("/users", usersRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
