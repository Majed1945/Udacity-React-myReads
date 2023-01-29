import { Link } from "react-router-dom";
import Shelf from "../Components/Shelf";
import PropTypes from "prop-types";

const HomePage = ({ books , changeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
          changeShelf={changeShelf}
          books={books}
          shelfName="Currently Reading"
        />
        <Shelf
          changeShelf={changeShelf}
          books={books}
          shelfName="Want to Read"
        />
        <Shelf 
        changeShelf={changeShelf} 
        books={books} 
        shelfName="Read" 

        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  books: PropTypes.array.isRequired, 
  changeShelf: PropTypes.func.isRequired 
};

export default HomePage;
