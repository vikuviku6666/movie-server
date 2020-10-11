import * as mongoose from 'mongoose';




export const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please Enter Movie Title'],
    },
    author: {
        type: String,
        required: [true, 'Please Enter Movie Author'],
    },
});