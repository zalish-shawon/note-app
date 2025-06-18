import { model, Schema } from "mongoose";
import { INote } from "../interfaces/notes.interface";

const noteSchema = new Schema<INote>({
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
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
})


export const Note = model<INote>("Note", noteSchema);