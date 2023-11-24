import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <div className='logo'>
        <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png' alt='someting wrong on logo'/>
      </div>
       <button onClick={ () => navigate(props.login ? '/login': '/')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 2rem 4rem;
  .logo{
    img{
    width: 9.25rem;
    height: 2.5rem;
    cursor: pointer;
  }
  }
  button {
    padding:0.5rem 1rem;
    background-color: red;
    border:none;
    color:white;
    cursor: pointer;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem
  }
`

export default Header;