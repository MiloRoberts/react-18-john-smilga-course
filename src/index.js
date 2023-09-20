import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css';
const books = [
    {
        author: 'Arthur C. Brooks',
        title: 'Build the Life You Want',
        img: "https://images-na.ssl-images-amazon.com/images/I/81+MJor-K6L._AC_UL600_SR600,400_.jpg",
        id: 1
    }, {
        author: 'Stephen King',
        title: 'Holly',
        img: "https://images-na.ssl-images-amazon.com/images/I/815oQ6G6HDL._AC_UL600_SR600,400_.jpg",
        id: 2
    }
];

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    return <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);