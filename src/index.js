import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg',
    id: 1
  },
  {
    author: 'Megan Logan',
    title: 'Self-Love Workbood for Women',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71o9iq2ZwDL._AC_UL600_SR600,400_.jpg',
    id: 2
  }
];

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} />
        );
      })}
    </section>
  );
};

const EventExamples = () => {
  return <section>
    <form>
      <h2>Typical Form</h2>
      <input type="text" name="product" onChange={(ev) => { console.log(ev.target.value); }} style={{ margin: '1rem' }} />
      <button type="submit">submit</button>
      <div>
        <button type="button" onClick={() => { console.log('click me'); }}>click me</button>
      </div>
    </form>
  </section>;
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return <article className="book">
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);