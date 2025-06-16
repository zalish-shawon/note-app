"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// First create schema
// Then create model
// Then create instance of model
// Then save the instance to the database or save the model directly in body
const noteSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, default: "", trim: true },
    category: {
        type: String,
        enum: ["work", "personal", "other"],
        default: "other",
    },
    pinned: {
        type: Boolean,
        default: false,
    }
});
const Note = (0, mongoose_1.model)("Note", noteSchema);
app.post("/notes/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // const newNote = new Note({
    //     title: "Learning Mongoose",
    // });
    // await newNote.save();
    const note = yield Note.create(body);
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note,
    });
}));
app.get("/notes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield Note.find();
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
        note,
    });
}));
app.get("/note/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield Note.findById(noteId);
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
        note,
    });
}));
app.patch("/note/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield Note.findById(noteId);
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
        note,
    });
}));
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
exports.default = app;
