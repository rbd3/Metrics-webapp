import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import Movie from './Movie';
import { fetchAllMovies } from '../redux/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();
  const { Movies, isLoading, categories } = useSelector((state) => state.movies);
  const allCategories = ['All', ...categories];
  const [filteredCategory, setFilteredCategory] = useState('All');

  const filteredMovies = filteredCategory === 'All'
    ? Movies
    : Movies.filter((movie) => movie.category.includes(filteredCategory));

  const handleCategory = (event) => {
    setFilteredCategory(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="movies">
        <h1>MOVIES LIST</h1>
        <div className="filter">
          <span>Categories</span>
          <select onChange={handleCategory}>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="movies-container">
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <Movie
              key={movie.id}
              Movie={movie}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
