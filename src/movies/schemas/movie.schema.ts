import * as mongoose from 'mongoose';



export const MovieSchema = new mongoose.Schema({
    title: String,
    author: String,
});