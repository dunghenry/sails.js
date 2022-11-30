module.exports = {
  create: async (req, res) => {
    try {
      const newBook = await Book.create({
        name: req.body.name,
        author: req.body.author,
      }).fetch();
      if (!newBook.id) {
        return res.status(400).json({ message: "Created book failed" });
      }
      return res.ok(newBook);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getAllBooks: async (req, res) => {
    const books = await Book.find();
    return res.ok(books);
  },
  getBook: async (req, res) => {
    const id = req.params.id;
    const book = await Book.findOne({ id });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
  },
  updateBook: async (req, res) => {
    const id = req.params.id;
    const updatedBook = await Book.updateOne({ id }).set({
      name: req.body.name,
      author: req.body.author,
    });
    if (updatedBook) {
      return res.status(200).json(updatedBook);
    } else {
      return res.status(200).json({ message: "Book not found" });
    }
  },
  deleteBook: async (req, res) => {
    const id = req.params.id;
    const deleteBook = await Book.destroyOne({ id });
    if (deleteBook) {
      return res.status(200).json({ message: "Delete book successfully" });
    } else {
      return res.status(200).json({ message: "Book not found" });
    }
  },
};
