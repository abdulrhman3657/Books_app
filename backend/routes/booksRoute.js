import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// post one book
router.post('/', async (req, res) => {

    console.log(`${req.method}: /books${req.path}`);

    try{

        if(req.body.title === undefined || req.body.author === undefined || req.body.publishYear === undefined) {
            return res.status(400).send({message: 'send: title, author, publishYear'});
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// get all books
router.get('/', async (req, res) => {

    console.log(`${req.method}: /books${req.path}`);

    try {

        const books = await Book.find({});

        return res.status(200).json({ count: books.length, data: books });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// get one book
router.get('/:id', async (req, res) => {

    console.log(`${req.method}: /books${req.path}`);

    try {

        const { id } = req.params;

        const book = await Book.findById(id);

        return res.status(200).json(book);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// update a book
router.put('/:id', async (req, res) => {

    console.log(`${req.method}: /books${req.path}`);

    try {

        if (req.body.title === undefined || req.body.author === undefined || req.body.publishYear === undefined) {
            return res.status(400).send({ message: 'Send title, author, publishYear'});
        }

        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);
    
        if (!result) {
          return res.status(404).json({ message: 'the book was not found' });
        }
    
        // success
        return res.status(200).send({ message: 'the Book updated successfully' });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// delete one book
router.delete('/:id', async (req, res) => {

    console.log(`${req.method}: /books${req.path}`);
    
    try {

        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);
    
        if (!result) {
          return res.status(404).json({ message: 'the book was not found' });
        }

        // success
        return res.status(200).send({ message: 'Book deleted successfully' });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

export default router;
