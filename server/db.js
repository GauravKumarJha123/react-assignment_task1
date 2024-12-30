const mongoose = require('mongoose');

const connectionString = "mongodb+srv://admin:test1234@cluster0.fisqo.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set('debug', true);

mongoose.connect(connectionString)
    .then(() => console.log("Mongoose connected to the DB cluster"))
    .catch((err) => console.error(`Mongoose connection error: ${err.message}`));

    mongoose.set('debug', true);

    const BookSchema = new mongoose.Schema({
        title: String,
        description: String,
        image: String,
        features: String,
        price: Number,
        author: String,
        publishedDate: String,
        genre: String,
        isbn: String,
        rating: Number,
        publisher: String,
        pageCount: Number,
        language: String,
      });

const Book = mongoose.model('Book', BookSchema);

//console.log(Book.schema.paths);


module.exports = {
    Book
};
