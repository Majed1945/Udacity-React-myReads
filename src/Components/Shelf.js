import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ shelfName , books, changeShelf }) => {

  const getShelfBooks = () => {
    if (shelfName === "Currently Reading") {
      return books.filter((book) => {
        return book.shelf === "currentlyReading";
      });
    } else if (shelfName === "Want to Read") {
      return books.filter((book) => {
        return book.shelf === "wantToRead";
      });
    } else if (shelfName === "Read") {
      return books.filter((book) => {
        return book.shelf === "read";
      });
    }
  };
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {getShelfBooks().map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                changeShelf={changeShelf}
                books={books}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired, 
  changeShelf: PropTypes.func.isRequired,
  shelfName: PropTypes.string.isRequired
};

export default Shelf;
