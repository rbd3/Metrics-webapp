import React from "react";
import Movie from "./Movie";

const MovieList = ({ books }) => (
    <div>
      {books.map((book) => (
        <Movie key={book.id} id={book.id} name={book.name} image={book.image} rating={book.rating} />
      ))}
    </div>
  );

  export default MovieList;