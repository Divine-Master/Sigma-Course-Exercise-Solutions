import mongoose from "mongoose";

const dummySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

export const dummy = mongoose.model('dummy', dummySchema);
