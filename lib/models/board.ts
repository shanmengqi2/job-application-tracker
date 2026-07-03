import mongoose from "mongoose";

export interface IBoard extends mongoose.Document {
  name: string;
  userId: string;
  columns: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const BoardSchema = new mongoose.Schema<IBoard>(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true, index: true },
    columns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Column" }],
  },
  {
    timestamps: true,
  },
);

export const Board =
  mongoose.models.Board || mongoose.model<IBoard>("Board", BoardSchema);
