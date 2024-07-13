import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import styles from "../index.css"
import { Grid, Skeleton, Container } from '@mantine/core';


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
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
    <div className="min-h-screen flex flex-col items-center bg-gray-800">
      <div className="bg-black w-full h-12 flex justify-center items-center">
        <h1 className="flex items-center text-lg font-bold text-red-500">NETFLICK</h1>
      </div>
      <div className="flex items-center justify-center gap-5 w-full ">
        {loading ? (
          <h2 className="text-gray-300">Loading...</h2>
        ) : (
            // <div className="max-w-xl w-full flex justify-center">    
            <div className="flex flex-wrap justify-centre items-center min-h-screen">
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                url={movie.url}
                title={movie.title}
                rating={movie.rating}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
            </div>
            // </div>
          // </Grid>
        )}
      </div>
    </div>
  );
}

export default Home;
