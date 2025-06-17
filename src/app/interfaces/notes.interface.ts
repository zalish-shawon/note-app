export interface INote {
  title: string;
  content?: string;
  category?: "work" | "personal" | "other";
  pinned?: boolean;
}
