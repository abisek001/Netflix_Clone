import React from 'react';
import styled from 'styled-components';

const bgImage = () => {
  return (
    <BgContainer>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Netflix BG' />
    </BgContainer>
  )
}

const BgContainer = styled.div`
  height: 100vh;
  width:100vw;
  img{
    height:100vh;
    width:100vw;
  }
`

export default bgImage;