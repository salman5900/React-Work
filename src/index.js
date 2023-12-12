import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// book 1  this is  an object Okay
const book1 = {
  title: "The Shadows Work Journal",
  author: "kella Shaheen",
  img: "./images/book-1.jpg",
};

// book2
const book2 = {
  title: "Ourth-Wing-Empyrean",
  author: "Rebecca-Yarros",
  img: "./images/book-2.jpg",
};

// book3
const book3 = {
  title: "Going-Infinite-Rise-Fall",
  author: "Michael Lewis",
  img: "./images/book-3.jpg",
};

function BookList() {
  return (
    <>
      <header>
        <Heading />
      </header>
      <section className="booklist">
        <Book img={book1.img} author={book1.author} title={book1.title} />
        <Book img={book2.img} author={book2.author} title={book2.title} />
        <Book img={book3.img} author={book3.author} title={book3.title} />
      </section>
    </>
  );
}
const Heading = () => {
  return <div className="heading">Best Seller Books</div>;
};

const Book = ({ img, author, title, children }) => {
  return (
    <>
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4
          style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
        >
          {author}
        </h4>
        {children}
      </article>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
