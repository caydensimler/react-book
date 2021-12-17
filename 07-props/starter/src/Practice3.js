import React from "react";

const Practice3 = () => {
  const title = "Hello, Friend";
  const author = "Cayden Simler";
  return (
    <div id="content">
      {/* 
        1. Pass title and author into Book as props        
      */}
      <Book title={title} author={author} />
    </div>
  );
};

/*
  2. Make the Book component accept props
  3. Pass title to the Title component as props
  4. Pass author to the Byline component as props
*/
const Book = (props) => (
  <article className="book-information" data-aos="slide-left">
    <Title title={props.title} />
    <Author author={props.author} />
  </article>
);

/*
  5. Create a component named <Title /> that accepts props
  6. Have it display an H1 with a title from props
*/
const Title = (props) => {
  return <h1 className="title">{props.title}</h1>;
};

/*
  5. Create a component named <Byline /> that accepts props
  6. Have it display a p with the author
*/
const Author = (props) => {
  return <p className="author">{props.author}</p>;
};

export default Practice3;
