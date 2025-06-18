import express, { Request, Response } from "express";
import { Note } from "../models/note.models";

export const notesRoutes = express.Router();

notesRoutes.post("/create-note", async (req: Request, res: Response) => {

    const body = req.body;
    // const newNote = new Note({
    //     title: "Learning Mongoose",
    // });

    // await newNote.save();
    const note = await Note.create(body);
    res.status(201).json({
        success: true,
        message: "Note created successfully",
       note,
    })
});

notesRoutes.get("/", async (req: Request, res: Response) => {

    const note = await Note.find().populate("userId");
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
       note,
    })
});

notesRoutes.get("/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
       note,
    })
});

notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedBody)
    res.status(201).json({
        success: true,
        message: "Note updated successfully",
       note,
    })
});

notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId)
    res.status(201).json({
        success: true,
        message: "Note deleted successfully",
       note,
    })
});
