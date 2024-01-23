import React from "react";
import ReactDOM from "react-dom/client";
import { books } from "./books.js";
import Book from "./Book";
import './index.css';

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} />
        );
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);