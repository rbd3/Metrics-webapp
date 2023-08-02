import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMetrics } from '../redux/metricSlice';

function Home() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.metrics);

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  return (
    <>
      <div className="movies">
        <h1>Movies List</h1>
      </div>
      <div className="movies-container">
        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item" >
              <h3 className="movie-name">{movie.name}</h3>
              <h3 className="movie-rating">{movie.rating.average}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
