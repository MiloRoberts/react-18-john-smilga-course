import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books.js';
import Book from './Book.js';

const BookList = () => {
    return (
        <React.Fragment>
            <h1>amazon best sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} number={index} />;
                })}
            </section>
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);