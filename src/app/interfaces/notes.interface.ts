import { Types } from "mongoose";

export interface INote {
  title: String;
  content?: String;
  category?: "work" | "personal" | "other";
  pinned?: boolean;
  userId: Types.ObjectId,
}
