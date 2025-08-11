import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';
import axios from '../../../Utils/Axios';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchRow() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRow();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  // Handle clicking on a movie poster
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(''); // close trailer if already open
    } else {
      // Search for trailer URL using movie-trailer
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v')); // get the video ID
          } else {
            setTrailerUrl('');
            alert('Trailer not found!');
          }
        })
        .catch(() => alert('Trailer not found!'));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_movies">
        {movies?.map((movie) => (
          <div
            className="row_movie"
            key={movie.id}
            onClick={() => handleClick(movie)}
            title="Click to play trailer"
          >
            <img
              src={`${baseUrl}${movie.backdrop_path}`}
              alt={movie.name || movie.title}
            />
            <p>{movie.title || movie.name}</p>
          </div>
        ))}
      </div>

      {/* Show YouTube trailer player below the row */}
      {trailerUrl && (
        <div className="row_trailer">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
