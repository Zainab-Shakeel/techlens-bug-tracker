import express from "express";
import db from "../db/connection.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router= express.Router();

router.get("/", async (req, res)=>{
    try{
        const[rows]= await db.query("SELECT id, name, email, created_at FROM users");
        res.json(rows);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
});

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected profile data",
    user: req.user
  });
});


export default router;