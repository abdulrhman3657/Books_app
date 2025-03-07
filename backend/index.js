import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import booksRoute from "./routes/booksRoute.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = 3000;

const app = express();

app.use(express.json());

// main page
app.get('/', (req, res) => {

    console.log(`${req.method}: ${req.path}`);

    res.send("hello");
});

app.use('/books', booksRoute);

app.listen(PORT, () => {
    console.log(`runing on PORT:${PORT}`);

    connectDB()
});

