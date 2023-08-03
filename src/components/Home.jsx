import React, { useEffect } from 'react';
import '../styles/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import Movie from './Movie';
import { fetchAllMovies } from '../redux/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();
  const { Movies, isLoading } = useSelector((state) => state.movies);

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
      </div>
      <div className="movies-container">
        <div className="movies-grid">
          {Movies.map((movie) => (
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
