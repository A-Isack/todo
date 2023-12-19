import { Schema, model } from "mongoose";


interface Ilist {
    userId: string,
    date: Date,
    todo: String
  }

const listSchema = new Schema<Ilist>({
    userId: {type: String, required: true},
    date: {type: Date, required: true},
    todo: {type: String, required: true}
})

export const List = model<Ilist>('List', listSchema);
