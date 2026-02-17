import express from "express";
import { signToken } from "../utils/jwt.js";

const router = express.Router();
const users = [
    { username: "Moshe", pass: "12345" },
]
router.post("/login", async (req, res) => {
    try {
        const { username, pass } = req.body;
        if (!username || !pass) return res.status(400).json({ err: "Missing required fields" });

        const currUser = users.find((user) => user.username === username && user.pass === pass);
        if (!currUser) return res.sendStatus(401);

        const token = signToken({ username, role: "user" });
        res.json({ token, username });
    } catch (err) {
        console.error(err);
        res.status(500).json({err: "Something break"});
    }
})

export default router;