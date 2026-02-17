import express from "express";
import { verifyToken } from "../utils/jwt.js";

const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const { token } = req.body;
        if(!token) return res.status(400).json({err: "Missing required fields"});
        const payload = verifyToken(token);

        res.json([
            { title: "momo" },
            { title: "nis" },
            { title: "ami" },
            { title: "bla" },
        ])
    } catch (err) {
        console.error(err);
        res.sendStatus(500)
    }
})
export default router;