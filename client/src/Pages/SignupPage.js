import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../account/firebase-config';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import BgImage from '../components/bgImage';
import SignUpBody from '../components/SignUpBody';


const SignupPage = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [formValues, setformValues] = useState({ email: "", password: "" })
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/movies')
  })
  return (
    <div>
      <SignupStyle>
        <BgImage />
        <div className='content'>
          <Header login />
          <div className='body'>
            <div className='text'>
              <h1>The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
              <h4>Join today. Cancel anytime.</h4>
              <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
            </div>
            <div className='form'>
              {showPassword ?
                <input type='password' placeholder='Password' name='password'
                  value={formValues.password} onChange={(e) => setformValues({
                    ...formValues, [e.target.name]: e.target.value
                  })} />
                :

                <input type='email' placeholder='Email Address' name='email'
                  value={formValues.email} onChange={(e) => setformValues({
                    ...formValues, [e.target.name]: e.target.value
                  })} />
              }
              {
                !showPassword ?
                  <button onClick={() => setshowPassword(true)}>Get Started</button>
                  :
                  <button onClick={handleSignIn}>Sign Up</button>
              }
            </div>
          </div>
        </div>
        <hr />
      </SignupStyle>
      <SignUpBody />
    </div>

  );
};

const SignupStyle = styled.div`
position:relative;
hr{
    border: 4px solid gray;
}
.content{
  position:absolute;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.79);
  height:100vh;
  width:100vw;
  grid-template-columns: 15vh 85vh;
}
.body{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top: 10rem;
}
.text{
  color:white;
  display:flex;
  flex-direction:column;
  text-align:center;
}
.text h1{
  font-size:3rem;
  font-weight: 700;
  padding:0 20rem;
}
.text h4{
  font-size: 2rem;
  font-weight: 400;
  margin-top:1.5rem;
}
.text h2{
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top:1.5rem;
};
.form{
  display:grid;
  width:60%;
  margin-top:1rem;
  input{
    color: black;
    padding: 1.5rem;
    font-size:1.2rem;
    width:45rem;
    &:focus{
      outline:none;
    }
  };
  grid-template-columns:${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
  button{
    color:white;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color:red;
    border:none;
    font-size:1.05rem;
    width:10rem;
  };
}
`;

export default SignupPage;
