import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

const Movies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [onHovered, setOnHovered] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    }
    return () => (window.onscroll = null);
  }, []);

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

  const handleSearchInputChange = (input) => {
    setSearchInput(input);

  };

  useEffect(() => {
    if (searchInput) {
      const filtered = movieData.filter((movie) =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(null);
    }
  }, [searchInput, movieData]);


  const scrollContainer = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainer.current) {
      setScrollLeft(scrollLeft - 500); // Adjust the scroll amount as needed
      scrollContainer.current.scrollLeft = scrollLeft;
    }
  };

  const handleScrollRight = () => {
    if (scrollContainer.current) {
      setScrollLeft(scrollLeft + 500); // Adjust the scroll amount as needed
      scrollContainer.current.scrollLeft = scrollLeft;
    }
  };


  return (
    <CardContainer onMouseMove={handleMouseMove}>
      <TopNav isScrolled={isScrolled} onSearchInputChange={handleSearchInputChange} />
      <h1 className='title'>Movie List</h1>
      <div className='movie-container' ref={scrollContainer}>
        <button className='scroll-button left' onClick={handleScrollLeft}>
        <i class="bi bi-chevron-compact-left"></i>
        </button>
        {filteredMovies ? (
          filteredMovies.map((movies) => (
            <div
              onMouseEnter={() => {
                setOnHovered(true);
                setHoveredMovie(movies);
              }}
              onMouseLeave={() => {
                setOnHovered(false);
                setHoveredMovie(null);
              }}
              onClick={() => navigate(`/home?MovieId=${movies._id}`)}
            >
              <img src={movies.banner} alt={movies.title} />
              <p className='movieTitle'>{movies.title}</p>
            </div>
          ))
        ) : (
          movieData && movieData.map((movie) => (
            <div
              onMouseEnter={() => {
                setOnHovered(true);
                setHoveredMovie(movie);
              }}
              onMouseLeave={() => {
                setOnHovered(false);
                setHoveredMovie(null);
              }}
              onClick={() => navigate(`/home?MovieId=${movie._id}`)}
              className='movieImg'
            >
              <img src={movie.banner} alt={movie.title} />
              <p className='movieTitle'>{movie.title}</p>
            </div>
          ))
        )}
        <button className='scroll-button right' onClick={handleScrollRight}>
        <i class="bi bi-chevron-compact-right"></i>
        </button>
        {hoveredMovie && onHovered && (
          <PopUpBox style={{ left: mousePosition.x, top: mousePosition.y }}>
            <div className='popup-box'>
              <h1>{hoveredMovie.title}</h1>
              <p>{hoveredMovie.synopsis}</p>
            </div>
          </PopUpBox>
        )}
      </div>
      <Footer />
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
  .title{
    color: white;
    font-size: xxx-large;
    margin-top: 7rem;
    margin-left: 70px;
  }
.movie-container {
  margin-top: 2rem;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 400px;
}

.movieTitle{
  color:white;
  font-size:x-large;
}
.movieImg{
  margin-left: 30px;
}
  img {
    border-radius: 0.2rem;
    width: 300px;
    height: 300px;
    z-index: 10;
    background-size:cover;
  }
  .scroll-button {
  cursor: pointer;
  padding: 10px;
  height: fit-content;
  margin-top: 122px
}

.scroll-button.left {
  position: sticky;
  left: 0;

}

.scroll-button.right {
  position: sticky;
  right: 0;
}
`;

const PopUpBox = styled.div`
 //display: ${({ show }) => (show ? 'block' : 'none')};  Hide by default
  position: absolute;
  transform: translate(-50%, -100%);
  height: max-content;
  width: 20rem;
  border-radius: 0.2rem;
  border: 0.1rem solid gray;
  background-color: #181818;
  transition: 0.3s ease-out;
  color: white;
`;

export default Movies;