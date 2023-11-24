import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

const Player = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get('id');
  const videoSrc = `http://localhost:5500/movies/${movieId}`;
  console.log(movieId);
  const navigate = useNavigate();
  return (
    <PlayerConatiner>
      <div className='palyer'>
        <div className='backArrow'>
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        {/* <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4' autoPlay loop controls /> */}
        <video controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </PlayerConatiner>
  )
}

const PlayerConatiner = styled.div`
  .palyer{
    width:100vw;
    height:100vh;
    .backArrow{
      position:absolute;
      padding:2rem;
      z-index:1;
      svg{
        font-size:3rem;
        cursor: pointer;
        color:white;
      }
    }
    video{
        width:100%;
        height:100%;
      }
  }
`;

export default Player;