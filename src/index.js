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
    const getBook = (id) => {
        const book = books.find((book) => { return book.id === id; });
        console.log(book);
    };
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book {...book} key={book.id} getBook={getBook} />;
            })}
        </section>
    );
};

const Book = (props) => {
    const { img, title, author, id, getBook } = props;
    // console.log(props);
    // const getSingleBook = () => { getBook(id); };
    return <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={() => { getBook(id); }}>click me</button>
        <h4>{author}</h4>
    </article>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);