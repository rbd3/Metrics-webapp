import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap';

function Movie({ id, name, image, rating }) {
  const navigate = useNavigate();

  const handleMovieDetails = () => {
    const movieId = id;
    navigate(`/MovieList/${movieId}`);
  };

  return (
    <div className="movie-item">
      <Button
        type="button"
        onClick={handleMovieDetails}
        aria-label="View more info"
        className="details-btn"
      >
      </Button>
      <Image className="movie-image" src={image.medium} alt="movie-image" />
      <h3 className="movie-name">{name}</h3>
      <h3 className="movie-rating">{rating.average}</h3>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      average: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Movie;
