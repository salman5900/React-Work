import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// book 1  this is  an object Okay
const book1 = {
  title: "The Shadows Work Journal",
  author: "kella Shaheen",
  img: "./images/book-1.jpg",
};

// book 2
const book2 = {
  title: "ourth-Wing-Empyrean",
  author: "Rebecca-Yarros",
  img: ".images.book-2.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book img={img} author={author} title={title} />
      <Book img={img} author={author} title={title} />
      <Book img={img} author={author} title={title} />
    </section>
  );
}

function Book(props) {
  return (
    <>
      <article className="book">
        <img src={props.img} alt={props.title} />
        <h2>{title}</h2>
        <h4
          style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
        >
          {props.author}
        </h4>
      </article>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
