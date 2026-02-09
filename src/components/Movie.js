import {Link} from "react-router-dom";


function Movie({key, id, title, coverImg, genres}) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      <img src={coverImg} alt={title} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
