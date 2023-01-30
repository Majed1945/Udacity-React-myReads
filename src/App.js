import "./App.css";
import { useState, useEffect } from "react";
import * as booksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import DetailedBook from "./Pages/DetailedBook";

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
    book.shelf = newShelf;
    await booksAPI.update(book, newShelf);
    setBooks([...books.filter((b) => b.id !== book.id), book]);
  };

  const changeShelf = (book, newShelf) => {
    updateBook(book, newShelf);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={
      <HomePage changeShelf={changeShelf} books={books} />}/>
      <Route exact path="/search" element={
      <SearchPage changeShelf={changeShelf} books={books} searchBooks={searchBooks} findBooks={getSearchBooks}/>}/>
      <Route exact path="/details" element={
      <DetailedBook/>}/>
    </Routes>
  );
};

export default App;
