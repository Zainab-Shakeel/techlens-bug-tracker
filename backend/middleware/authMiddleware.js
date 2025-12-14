import jwt from "jsonwebtoken";

const authMiddleware= (req, res, next)=>{
    const authHeader= req.headers.authorization;

    // 1. check token exists 
    if(!authHeader){
        return res.status(401).json({message: "No token Provided"});
    }

    // 2. extract token 
    const token= authHeader.split(" ")[1];

    try{
        // 3. verify token 
        const decoded= jwt.verify(token, process.env.JWT_SECRET);

        // 4. attach user info 
        req.user= decoded;

        next();


    }catch(error){
        console.error(error);
        return res.status(401).json({ message: "Invalid token" });
    }
}

export default authMiddleware;