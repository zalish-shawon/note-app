import express, { Application, Request, Response } from "express";
import mongoose, { model, Schema } from "mongoose";


const app: Application = express();

const noteSchema = new Schema({
    title: String,
    content: String,
})


const Note = model("Note", noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {
    const newNote = new Note({
        title: "Learning Mongoose",
        content: "Using Mongoose to interact with MongoDB is easy and efficient.",
    });

    await newNote.save();

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: newNote,
    })
});



app.get("/", (req: Request, res: Response) => {

    res.send("Hello, World!");

});

export default app;