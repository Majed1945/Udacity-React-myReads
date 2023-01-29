import "./App.css";
import { useState, useEffect } from "react";
import * as booksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const getSearchBooks = async (query) => {
    const res = await booksAPI.search(query, 100);
    setSearchBooks(res);
  };

  const getBooks = async () => {
    const res = await booksAPI.getAll();
    setBooks(res);
  };

  const updateBook = async (book, newShelf) => {
    await booksAPI.update(book, newShelf);
    getBooks();
  };

  const changeShelf = (book, newShelf) => {
    updateBook(book, newShelf);
  };

  useEffect(() => {
    getBooks();
  }, [books]);

  return (
    <Routes>
      <Route exact path="/" element={
      <HomePage changeShelf={changeShelf} books={books} />}/>
      <Route exact path="/search" element={
      <SearchPage changeShelf={changeShelf} books={books} searchBooks={searchBooks} findBooks={getSearchBooks}/>}
      />
    </Routes>
  );
};

export default App;
