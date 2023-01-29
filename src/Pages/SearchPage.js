import { Link } from "react-router-dom";
import Book from "../Components/Book";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchPage = ({ books, changeShelf, searchBooks, findBooks }) => {
  const [inputText, setInputText] = useState("");

  const search = (query) => {
    setInputText(query);
  };

  useEffect(() => {
    findBooks(inputText);
  }, [inputText, findBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={(event) => search(event.target.value)}
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={inputText}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(searchBooks) &&
            searchBooks.map((book) => {
              return (
                <Book
                  changeShelf={changeShelf}
                  key={book.id}
                  book={book}
                  books={books}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  searchBooks: PropTypes.array,
  findBooks: PropTypes.func.isRequired,
};

export default SearchPage;
