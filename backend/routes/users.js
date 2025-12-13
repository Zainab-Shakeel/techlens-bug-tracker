import express from "express";
import db from "../db/connection.js";

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

export default router;