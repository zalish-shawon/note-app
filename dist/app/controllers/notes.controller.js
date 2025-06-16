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
exports.notesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const note_models_1 = require("../models/note.models");
exports.notesRoutes = express_1.default.Router();
exports.notesRoutes.post("/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // const newNote = new Note({
    //     title: "Learning Mongoose",
    // });
    // await newNote.save();
    const note = yield note_models_1.Note.create(body);
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note,
    });
}));
exports.notesRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield note_models_1.Note.find();
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
        note,
    });
}));
exports.notesRoutes.get("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield note_models_1.Note.findById(noteId);
    res.status(201).json({
        success: true,
        message: "Notes read successfully",
        note,
    });
}));
exports.notesRoutes.patch("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = yield note_models_1.Note.findByIdAndUpdate(noteId, updatedBody);
    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        note,
    });
}));
exports.notesRoutes.delete("/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield note_models_1.Note.findByIdAndDelete(noteId);
    res.status(201).json({
        success: true,
        message: "Note deleted successfully",
        note,
    });
}));
