import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, title, coverImg, summary, genres }) => {
  return (
    <Link to={`/movie/${id}`}>
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </Link>
  );
};
export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
