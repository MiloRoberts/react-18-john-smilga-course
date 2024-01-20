import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const firstBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg'
};

const secondBook = {
  author: 'Megan Logan',
  title: 'Self-Love Workbood for Women',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71o9iq2ZwDL._AC_UL600_SR600,400_.jpg'
};

const Booklist = () => {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return <article className="book">
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);