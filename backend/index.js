import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"

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
    console.log(`runing on http://localhost:${PORT}`);

    mongoose.connect('mongodb://localhost:27017/BookStore')
    .then(() => console.log("database connected"))
    .catch(error => console.log(error));
});

