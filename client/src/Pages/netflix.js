import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopNav from '../components/TopNav';
import styled from 'styled-components';
import { useNavigate, useLocation  } from 'react-router-dom';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get('MovieId');
  const Url = `http://localhost:5500/movie/${movieId}`;
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      // remove listener when component unmounts
      window.removeEventListener("scroll", onScroll);
    };
  }, [movieId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        if (response.data && response.data.movies && response.data.movies.length > 0) {
          setMovieData(response.data.movies);
        } else {
          console.error('Movie data is missing the "title" property:', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [Url]);
  

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src={movieData[0] && movieData[0].bg}
          alt="hero images"
        />
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="title">
              <h1>{movieData[0] && movieData[0].title ? movieData[0].title:'Movie Title Not Available'}</h1>
              <p>
                {movieData[0] && movieData[0].synopsis ?movieData[0].synopsis : 'Movie description not available'}
              </p>
              <div className="buttons">
                <button onClick={() => navigate(`/player?id=${movieId}`)} className="playBtn">
                  Play
                </button>
                <button className="moreBtn">More</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Card />
      <Footer/>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }

      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }
  
`;

export default Netflix;
