import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Book = ({ book, changeShelf, books }) => {
  const navigate = useNavigate();

  const shelfOptions = [
    {
      id: "1",
      shelfName: "currentlyReading",
      shelfDisplayName: "Currently Reading",
    },
    {
      id: "2",
      shelfName: "wantToRead",
      shelfDisplayName: "Want to Read",
    },
    {
      id: "3",
      shelfName: "read",
      shelfDisplayName: "Read",
    },
    {
      id: "4",
      shelfName: "none",
      shelfDisplayName: "None",
    },
  ];

  const submit = (event) => {
    const newShelf = event.target.value;
    changeShelf(book, newShelf);
  };

  const bookShelf = () => {
    var defaultShelf = "none";
    books.forEach((currentBook) => {
      if (currentBook.id === book.id) {
        defaultShelf = currentBook.shelf;
      }
    });
    return defaultShelf;
  };

  const displayDetails = () => {
    navigate("/details", 
    {
      state: { chosenBook: book },
      replace: true,
    });
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            onClick={displayDetails}
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.hasOwnProperty("imageLinks") &&
                book.imageLinks.hasOwnProperty("thumbnail") &&
                `url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            {
              <select onChange={submit} value={bookShelf()}>
                <option disabled>Move to...</option>
                {shelfOptions.map((option) => {
                  return (
                    <option key={option.id} value={option.shelfName}>
                      {option.shelfDisplayName}
                    </option>
                  );
                })}
              </select>
            }
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {Array.isArray(book.authors) &&
            book.authors.map((author) => {
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
  book: PropTypes.object.isRequired,
};

export default Book;
