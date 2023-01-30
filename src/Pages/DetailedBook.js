import { useLocation, Link } from "react-router-dom";

const DetailedBook = () => {
  const location = useLocation();
  const book = location.state ? location.state.chosenBook : null;

  return book !== null ? (
    <div>
      <div className="list-books-title">
        <h1>{book.title}</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Link className="close-search" to="/">
          Close
        </Link>
        <div
          className="book-cover"
          style={{
            margin: "3rem",
            width: 150,
            height: 200,
            backgroundImage:
              book.hasOwnProperty("imageLinks") &&
              book.imageLinks.hasOwnProperty("thumbnail") &&
              `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <div style={{ margin: "1.6rem" }}>
          <p>
            Description:{" "}
            {book.hasOwnProperty("description") ? book.description : "NA"}
          </p>
          <div style={{ display: "flex" }}>
            <p>
              Publisher:{" "}
              {book.hasOwnProperty("publisher") ? book.publisher : "NA"}
            </p>
            <p style={{ marginLeft: "1rem" }}>
              Publish Date:{" "}
              {book.hasOwnProperty("publishedDate") ? book.publishedDate : "NA"}
            </p>
            <p style={{ marginLeft: "1rem" }}>
              Average Rating:{" "}
              {book.hasOwnProperty("averageRating") ? book.averageRating : "NA"}
            </p>
            <p style={{ marginLeft: "1rem" }}>
              Ratings Count:{" "}
              {book.hasOwnProperty("ratingsCount") ? book.ratingsCount : "NA"}
            </p>
            <p style={{ marginLeft: "1rem" }}>
              Page Count:{" "}
              {book.hasOwnProperty("pageCount") ? book.pageCount : "NA"}
            </p>
            <p style={{ marginLeft: "0.5rem" }}>
              For more information:{" "}
              {book.hasOwnProperty("previewLink") ? (
                <a href={book.previewLink}>Click Here</a>
              ) : (
                "NA"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2 style={{ padding: "3rem" }}>Please select the book</h2>
  );
};

export default DetailedBook;
