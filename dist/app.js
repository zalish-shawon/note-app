"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_controllers_1 = require("./app/controllers/notes.controllers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// First create schema
// Then create model
// Then create instance of model
// Then save the instance to the database or save the model directly in body
app.use("/notes", notes_controllers_1.notesRoutes);
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
exports.default = app;
