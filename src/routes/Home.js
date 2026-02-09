import Movie from "../components/Movie";
import { useEffect, useState } from "react";

function Home(){
    
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.bz/api/v2/list_movies.json?minimum_rating=9.8?sort_by=year`,
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            coverImg={movie.medium_cover_image}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}
export default Home;