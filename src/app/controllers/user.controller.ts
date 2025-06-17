import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const usersRoutes = express.Router();

usersRoutes.post("/create-user", async (req: Request, res: Response) => {

    const body = req.body;
    
    const user = await User.create(body);
    res.status(201).json({
        success: true,
        message: "User created successfully",
       user,
    })
});

usersRoutes.get("/", async (req: Request, res: Response) => {

    const user = await User.find();
    res.status(201).json({
        success: true,
        message: "users read successfully",
       user
    })
});

usersRoutes.get("/:userId", async (req: Request, res: Response) => {

    const userId = req.params.userId;
    const user = await User.findById(userId);
    res.status(201).json({
        success: true,
        message: "users read successfully",
       user
    })
});

usersRoutes.patch("/:userId", async (req: Request, res: Response) => {

    const userId = req.params.userId;
    const updatedBody = req.body;
    const user = await User.findByIdAndUpdate(userId, updatedBody)
    res.status(201).json({
        success: true,
        message: "User updated successfully",
       user
    })
});

usersRoutes.delete("/:userId", async (req: Request, res: Response) => {

    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId)
    res.status(201).json({
        success: true,
        message: "User deleted successfully",
       user
    })
});
