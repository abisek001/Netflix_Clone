import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>

        <footer>
            <div className="container footer">
                <div className="ftn-qus">
                    Questions? Call
                    <a href="#">
                        000-800-919-1694
                    </a>
                </div>
                <br />
                {/*<!--fotter Links -->*/}
                <div className="footer d-flex">
                    <div className="col column-1">
                        <div className="row">
                            <a href="#">FAQ </a>
                            <a href="#">Media Centre</a>
                            <a href="#">Ways to Watch</a>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Speed Test</a>
                        </div>
                    </div>

                    <div className="col column-2">
                        <div className="row">
                            <a href="#">Help Centre</a>
                            <a href="#">Investor Relations </a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Legal Notices</a>
                        </div>
                    </div>

                    <div className="col column-3">
                        <div className="row">
                            <a href="#">Account</a>
                            <a href="#">Jobs</a>
                            <a href="#">Privacy</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Only on Netflix</a>
                        </div>
                    </div>

                </div>
                <br />

                <div className="end-txt">
                    <h6>Netflix India</h6>
                </div>
            </div>
        </footer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
.ftn-qus{
color:rgba(255,255,255,0.7);
margin-top: 60px;
}
footer{
    background-color:gray;
}

.ftn-qus a{
    color:rgba(255,255,255,0.7);
}
/*Start button logo*/
.bi-chevron-right{
    font-size: 23px;
}

.column-1 a,
.column-2 a,
.column-3 a {
    margin-top: 10px;
    color: rgba(255,255,255,0.7);
    font-size: 0.875rem;
    font-weight: 400;
}
.a{
    text-decoration-line:none;
}
.logo-2{
    width: 120px;
    color: #fff;
    display:flex;
    justify-content:space-between;
    align-items: center;
}
.globalIcon{
    position: absolute;
    margin-left: 8px;
}
.downIcon{
    margin-left: -23px;
}
.end-txt {
    h6{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 0.875rem;
    color: rgba(255,255,255,0.7);
    margin-top: 40px;
    }
}  

`;

export default Footer