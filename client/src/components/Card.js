import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from "@material-ui/core";

const Card = (movieId) => {
  const [onHovered, setOnHovered] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const Url = 'http://localhost:5500/movie';
    axios.get(Url)
      .then((response) => {
        setMovieData(response.data.movies);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <CardContainer onMouseMove={handleMouseMove}>
      <div className='movieimg'>
        <h1 className='movielist'>Popular on Netflix</h1>
        <Grid container spacing={2}>
          {movieData && movieData.map((movie) => (
            <Grid item xs={3} key={movie._id}>
              <div
                onMouseEnter={() => {
                  setOnHovered(true);
                  setHoveredMovie(movie);
                }}
                onMouseLeave={() => {
                  setOnHovered(false);
                  setHoveredMovie(null);
                }}
              >
                <img src={movie.banner} alt={movie.title} onClick={() => navigate(`/home?MovieId=${movie._id}`)} />
                <p className='movieTitle'>{movie.title}</p>
                console.log(movieId);
              </div>
            </Grid>
          ))}
        </Grid>
        {hoveredMovie && onHovered && (
          <PopUpBox style={{ left: mousePosition.x, top: mousePosition.y }}>
            <div className='popup-box'>
              <h1>{hoveredMovie.title}</h1>
              <p>{hoveredMovie.synopsis}</p>
              <p>Rating: {hoveredMovie.rating}</p>
            </div>
          </PopUpBox>
        )}
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  // ... (your existing styles)
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  .links{
    display:flex;
    list-style: none;
    gap:3rem;
  }
  .movielist{
    color: white;
    font-size: xxx-large;
  }
.movieTitle{
  color:white;
  font-size:x-large;
}
  img {
    border-radius: 0.2rem;
    width: 300px;
    height: 300px;
    z-index: 10;
    background-size:cover;
  }
`;

const PopUpBox = styled.div`
  /* display: ${props => props.show ? 'block' : 'none'}; // Hide by default */
  // Styling for the pop-up box
  position: absolute;
  transform: translate(-50%, -100%);
  height: max-content;
  width: 20rem;
  border-radius: 0.2rem;
  border: 0.1rem solid gray;
  background-color: #181818;
  transition: 0.3s ease-out;
  color:white;
  .popup-box{
    padding:1rem;
  }
`;

export default Card;
