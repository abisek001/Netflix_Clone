import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../account/firebase-config';

import { onAuthStateChanged, signOut } from "firebase/auth";


const TopNav = ({ isScrolled, onSearchInputChange }) => {
    const movie_id = '650e671aa9d41b0ddd4b18ce'
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate()
    const navLinks = [
        { name: "Home", link: `/home?MovieId=${movie_id}` },
        { name: "TV Shows", link: '/movies' },
        { name: "Movies", link: '/movies' },
        { name: "New & Poppular", link: '/movies' },
        { name: "My List", link: '/movies' },
    ]


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (!currentUser) {
                navigate('/login');
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, [navigate]);

    const handleSearch = () => {
        onSearchInputChange(searchValue);
      };

    return (
        <NavContainer>
            {console.log(`is nav srolled: `, isScrolled)}
            <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
                <div className='leftside'>
                    <div className='logo'>
                        <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png' alt='Somethin wrong to load logo' />
                    </div>
                    <ul className='links'>
                        {
                            navLinks.map(({ name, link }) => {
                                return (
                                    <li key={name}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='rightside'>
                    <div className='serach-container'>
                    <form className='serach'>
                        <button type="submit"
                        onClick={handleSearch}>
                            <i className="bi bi-search"></i>
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </form>
                    </div>
                    <button onClick={() => signOut(firebaseAuth)} className='logOut'>
                        <AiOutlineLogout />
                    </button>
                </div>
            </nav>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    .serach-container{
        background-color:#333333;
        border-radius: 6px;
        margin-right: 5rem;
        input{
            border-radius: 6px;
            background-color:#333333;
            border:none;
            outline:none;
            color:white;
            font-size:x-large;
            &focus{
                outline:none;
                color:white;
                font-size:medium;
            }
        }
    }
    .serach{
        height:50px;
        width:250px;
        display:flex;
        justify-self:center;
        button{
            background-color: #333333;
            border:none;
            border-radius:50%;
            width:70px;
            padding-right: 15px;
            padding-left: 15px;
            color:white;
        }
    }
  .notScroll{
    display: flex;
  }
  .scrolled{
    display: flex;
    background-color:black;
  }
  nav{
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
   transition: 0.3s ease-in-out;
   .leftside{
    display:flex;
    align-items:center;
    gap:2rem;
    margin-left: 70px;
   .logo{
    display:flex;
    justify-content:center;
    align-items:center;
   }
   img{
    width:10rem;
    height:2rem;
   }
  }
  .links{
    display:flex;
    list-style: none;
    gap:3rem;
    li{
        a{
            color:white;
            text-decoration:none;
        }
    }
  }
}
.rightside{
    display:flex;
    align-items:center;
    gap: 1rem;
    margin-right: 5rem;
    .logOut{
        background-color:red;
        border:none;
        cursor: pointer;
        border-radius:10%;
    }&:focus{
        outline:none;
    }svg{
        color:white;
        font-size:2rem;
    }
}
`;

export default TopNav