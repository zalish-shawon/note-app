import express, { Application, Request, Response } from "express";
import mongoose, { model, Schema } from "mongoose";


const app: Application = express();

app.use(express.json());

// First create schema
// Then create model
// Then create instance of model
// Then save the instance to the database or save the model directly in body

const noteSchema = new Schema({
    title: {type: String, required: true, trim: true},
        content: {type: String, default: "", trim: true},
        category: {
            type: String,
            enum: ["work", "personal", "other"],
            default: "other",
        },
        pinned: {
            type: Boolean,
            default: false,
        }
})


const Note = model("Note", noteSchema);

app.post("/notes/create-note", async (req: Request, res: Response) => {

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

app.get("/notes", async (req: Request, res: Response) => {

    const note = await Note.find();
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
       note,
    })
});

app.get("/note/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
       note,
    })
});

app.patch("/note/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedBody)
    res.status(201).json({
        success: true,
        message: "Note updated successfully",
       note,
    })
});

app.delete("/note/:noteId", async (req: Request, res: Response) => {

    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId)
    res.status(201).json({
        success: true,
        message: "Note deleted successfully",
       note,
    })
});



app.get("/", (req: Request, res: Response) => {

    res.send("Hello, World!");

});

export default app;