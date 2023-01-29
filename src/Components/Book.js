import PropTypes from "prop-types";

const Book = ({ book, changeShelf, books }) => {

  const submit = (event) => {
    const newShelf = event.target.value;
    changeShelf(book, newShelf);
  };

  const existiningBooks = () => {
    var exist=false;
    books.forEach((currentBook) => {
      if (currentBook.id === book.id) {
        exist= true;
        book.shelf=currentBook.shelf
      }
    });
    return exist;
  };

  const bookShelf = () => {
    var defaultShelf="none";
    books.forEach((currentBook) => {
      if (currentBook.id === book.id) {
        defaultShelf = currentBook.shelf;
      }
    });
    return defaultShelf;
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.hasOwnProperty("imageLinks") && book.imageLinks.hasOwnProperty("thumbnail") &&`url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            {
              <select onChange={submit} value={bookShelf()}>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                {existiningBooks() && <option value="none">None</option>}
              </select>
            }
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {Array.isArray(book.authors) && book.authors.map((author) => {
              return <p key={author}>{author}</p>;
            })}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  books: PropTypes.array.isRequired, 
  changeShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

export default Book;
