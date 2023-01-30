import { Link } from "react-router-dom";
import Book from "../Components/Book";
import { useState , useCallback , useEffect } from "react";
import PropTypes from "prop-types";
import debounce from 'lodash.debounce';

const SearchPage = ({ books, changeShelf, searchBooks, findBooks }) => {
  const [inputText, setInputText] = useState("");
  const [searchInformation, setSearchInformation] = useState(false);

  const debouncedSave = useCallback(
		debounce(query => findBooks(query), 100),
		[], 
	);

  const search = (query) => {
    setSearchInformation(true)
    setInputText(query);
		debouncedSave(query);
  };

  useEffect(() => {
    search("");
    setSearchInformation(false)
  }, []);

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
          {Array.isArray(searchBooks)?
            (searchBooks.map((book) => {
              return (
                <Book
                  changeShelf={changeShelf}
                  key={book.id}
                  book={book}
                  books={books}
                />
              );
            })):(searchInformation && (<h2>No books match your input</h2>))}
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
