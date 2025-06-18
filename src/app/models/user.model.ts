import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    age: {type: Number, required: true, min: 18, max: 65},
    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin', 'moderator'],
        default: 'user',
    },
   
},
{
    versionKey: false,
    timestamps: true,
}

);


export const User = model<IUser>("User", userSchema);