import express, { Application, Request, Response } from "express";
import mongoose, { model, Schema } from "mongoose";
import { Note } from "./app/models/note.models";
import { notesRoutes } from "./app/controllers/note.controller";
import { usersRoutes } from "./app/controllers/user.controller";


const app: Application = express();

app.use(express.json());

// First create schema
// Then create model
// Then create instance of model
// Then save the instance to the database or save the model directly in body



app.use("/notes", notesRoutes);
app.use("/users", usersRoutes);


app.get("/", (req: Request, res: Response) => {

    res.send("Hello, World!");

});

export default app;