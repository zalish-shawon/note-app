"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
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
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
