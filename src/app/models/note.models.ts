import { model, Schema } from "mongoose";

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


export const Note = model("Note", noteSchema);