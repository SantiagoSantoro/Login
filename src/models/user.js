import mongoose from "mongoose";

const collection = 'users';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    password: String,
});

export const userModel = mongoose.model(collection, userSchema);
