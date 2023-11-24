import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const SignUpBody = () => {
    return (
        <BodyContaniner>
            {/* TV Box*/}

            <div className=" container">
                <div className="tv-box  d-flex">
                    <div className="tv-text">
                        <h2>Enjoy on your TV</h2>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="tv-img">
                        <img src="./Images/Enjoy TV Image.png" alt="TV Image" />
                        <video autoplay muted loop src="./Images/Enjoy TV Video.m4v"></video>
                    </div>
                </div>
            </div>
            <hr />
            <div className=" container">
                <div className="down-box">
                    <div className="down-img d-flex">
                        <img src="./Images/netfix girl.png" alt="phone Images" />
                        <div className="down-text">
                            <h6>Download your shows to watch offline</h6>
                            <p>Save your favourites easily and always have something to watch.</p>
                        </div>
                    </div>
                    <div className="str-container d-flex">
                        <div className="str-img">
                            <img src="./Images/netfix strange thing img.png" alt="Images" />
                        </div>
                        <div className="str-text">
                            <div>Stranger Things</div>
                            <p>Downloading...</p>
                        </div>
                        <div className="str-gif">
                            <img src="./Images/download-icon.gif" alt="GIF" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/*<!--Stream box-->*/}
            <div className=" container">
                <div className="strm-box  d-flex">
                    <div className="strm-text">
                        <h2>Watch everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>

                    <div className="strm-img">
                        <img src="./Images/netfix watch system.png" alt="System Image" />
                    </div>
                    <br />
                    <div className="strm-video">
                        <video autoplay muted loop src="./Images/netfix video.m4v"></video>
                    </div>
                </div>
            </div>
            <hr />
            {/*<!--kids box-->*/}
            <div className=" container">

                <div className="kids-box  d-flex">
                    <div className="kids-img">
                        <img src="./Images/netfix child.png" alt="phone Image" />
                    </div>

                    <div className="kids-text">
                        <h2>Create profiles for kids</h2>
                        <p>Send children on adventures with their favourite characters in a space made just for them—free with
                            your membership.</p>
                    </div>
                </div>
            </div>
            <hr />
            <br />
            <div className=" container">
                <div className="questions">
                    <h2>Frequently Asked Questions</h2>
                    {/*<!--Accoridan qus-->*/}
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item qus-col">
                            <h2 className="accordion-header ">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What is Netflix?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix is a streaming service that offers a wide variety of
                                    award-winning TV shows, movies, anime, documentaries and more – on thousands of
                                    internet-connected devices.
                                    <br />
                                    You can watch as much as you want, whenever you want, without a single ad – all for one low
                                    monthly price. There's always something new to discover, and new TV shows and movies are
                                    added
                                    every week!
                                </div>
                            </div>
                        </div>
                        {/*<!--Accoridan box -2 -->*/}
                        <div className="accordion-item qus-col">
                            <h2 className="accordion-header mt-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How much does Netflix cost?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                                    streaming
                                    device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra
                                    costs,
                                    no contracts.
                                </div>
                            </div>
                        </div>
                        {/*<!--Accoridan box -3 -->*/}
                        <div className="accordion-item qus-col">
                            <h2 className="accordion-header mt-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Where can I watch?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch
                                    instantly on the web at netflix.com from your personal computer or on any internet-connected
                                    device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming
                                    media
                                    players and game consoles.
                                    <br />
                                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use
                                    downloads to watch while you're on the go and without an internet connection. Take Netflix
                                    with
                                    you anywhere.
                                </div>
                            </div>
                        </div>
                        {/*<!--Accoridan box -4 -->*/}
                        <div className="accordion-item qus-col">
                            <h2 className="accordion-header ">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapsefour" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    How do I cancel?
                                </button>
                            </h2>
                            <div id="flush-collapsefour" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix is flexible. There are no annoying contracts and no
                                    commitments. You can easily cancel your account online in two clicks. There are no
                                    cancellation fees – start or stop your account anytime.
                                </div>
                            </div>
                        </div>
                        {/*<!--Accoridan box -5 -->*/}
                        <div className="accordion-item qus-col">
                            <h2 className="accordion-header mt-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapsefive" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    What can i watch on Netflix?
                                </button>
                            </h2>
                            <div id="flush-collapsefive" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Netflix has an extensive library of feature films, documentaries, TV
                                    shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime
                                    you want.
                                </div>
                            </div>
                        </div>
                        {/*<!--Accoridan box -6 -->*/}
                        <div className="accordion-item qus-col">
                            <h2 className="accordion-header mt-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapsesix" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Is Netflix good forkids?
                                </button>
                            </h2>
                            <div id="flush-collapsesix" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">The Netflix Kids experience is included in your membership to give
                                    parents control while kids enjoy family-friendly TV shows and films in their own space.

                                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                                    rating of content kids can watch and block specific titles you don’t want kids to see.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="bottom-mail input-group-2">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className=" mail-box-2 d-flex">
                    <input type="email" minlength="5" maxlength="50" required="required" />
                    <label>Email address</label>
                    <button type="button" className=" btn btn-danger" > Get Started
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
            <hr />
            <Footer/>
        </BodyContaniner>
    )
}

const BodyContaniner = styled.div`
/*TV-BOX*/
.tv-text{
    margin: 3rem;
    margin-top: 12rem;
}
.tv-text h2{
    font-size: 3rem;
    font-weight: 900;
    color: rgb(255,255,255);
    text-align: left;
}
.tv-text p{
    font-size: 1.5rem;
    font-weight: 400;
    color: rgb(255,255,255);
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
    margin-top: 25px;
}
.tv-box{
    justify-content: center;
    color: rgb(255,255,255);
    text-align: center;
    height: 530PX;
    box-sizing: border-box;
}
.tv-img img{
    height: 444px;
    width: 600px ;
    margin-top: 3rem;
    overflow-clip-margin: content-box;
    overflow: clip;
}
.tv-img video{
    position: absolute;
    height: 333px;
    width: 435px;
    right: 12.3rem;
    margin-top: 96px;
    z-index: -1;
}
hr{
    border: 4px solid gray;
}
/*download box style*/
.down-box{
    margin-bottom: 80px;
    margin-top: 100px;
    z-index: -1;
    position: relative;
}
.down-img img{
    height: 480px;
    margin-top: -70px;
}
.down-box h6{
    font-size: 3rem;
    font-weight: 900;
    color: rgb(255,255,255);
    text-align: left;
}
.down-box p{
    font-size: 1.5rem;
    font-weight: 400;
    color: rgb(255,255,255);
    text-align: left;
    margin-top: 25px;
}
.down-text{
    margin: 60px;
}
.str-container{
    border: 2px solid rgba(128,128,128,0.7);
box-shadow: 0 0 2em 0 rgb(0,0,0);
border-radius: 0.75rem;
background-color: black;
z-index: 1;
width: 350px;
overflow: hidden;
position: absolute;
left: 11%;
bottom: 8%;
padding: 10px;
}
.str-img img{
    height: 5rem;
}
.str-text{
    margin: 18px;
}
.str-text div{
    display: inline;
    color: rgb(255,255,255);
    font-weight: 500;
    font-size: 1rem;
}
.str-text p{
    display: inline;
    font-size: 0.875rem;
    font-weight: 400;
    color: #0071eb;
    margin-top: 25px;
}
.str-gif img{
    height: 3rem;
    margin-top: 18px;
}
/*Stream box style*/
.strm-box{
    margin-bottom: 55px;
    margin-top: 60px;
    position: relative;
}
.strm-box h2{
    font-size: 3rem;
    font-weight: 900;
    color: rgb(255,255,255);
    text-align: left;
}
.strm-box p{
    font-size: 1.5rem;
    font-weight: 400;
    color: rgb(255,255,255);
    text-align: left;
    margin-top: 25px;
}
.strm-img img{
    overflow: clip;
    height: 400px;
}
.strm-text{
    margin: 84px
}
.strm-video video{
    height: 190px;
    position: absolute;
    left: 857px;
    top: 51px;
    z-index: -1;
}

/*Kids box style*/
.kids-box{
    margin-top: 90px;
    margin-bottom: 90px;
}
.kids-text h2{
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
}
.kids-text p{
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
    margin-top: 25px;
}
.kids-text{
    margin: 50px;
    margin-top: 127px;
}
.kids-img img{
    height: 380px;
}   
/*questions box style*/
.questions h2 {
    font-size: 3rem;
    font-weight: 900;
    color: rgb(255,255,255);
    text-align: center;
}
.qus-col{
    background-color: rgb(45, 45, 45);
    color: rgb(255,255,255);
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
}

.accordion-button {
    background-color: rgb(45, 45, 45);
    color: rgb(255,255,255);
    border-color: none;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
}

.accordion-button::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' color='white' class='bi bi-plus-lg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'/%3E%3C/svg%3E");
}

.accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' color='white' class='bi bi-x-lg' viewBox='0 0 16 16'%3E%3Cpath d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z'/%3E%3C/svg%3E");
}
.accordion{
    --bs-accordion-border-color: none;
}
.accordion-button:hover{
    background-color: gray;
}
.accordion-item input:valid ~ button,
.accordion-button input:focus ~ button
{
    background-color: gray;
}

.accordion-button:not(.collapsed) {
    color: #fff;
    background-color: gray;
    box-shadow:none
}
#accordionFlushExample{
    margin: 1.5rem;
}
.accordion-button{
    padding: 24px;
}
.accordion-body{
    text-align: left;
}
.accordion-button{
    margin-top: 10px;
}
.bottom-mail{
    margin-left: 30rem;
    margin-bottom: 80px;  
}

.input-group-2 button{
    background: rgb(229,9,20);
    color: rgb(255,255,255);
    font-size: 1.5rem;
    font-weight: 500;
    min-height: 3.5rem;
    margin-left: 10px;
}
/*search box style*/
.input-group-2 input{
    color: white;
    width: 24rem;
    line-height: 1.5rem;
    padding-top: 1.5rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.25rem;
    background: rgba(22, 22, 22, 0.7);
    border-color: rgba(128, 128, 128, 0.7);
}
.select-box {
    appearance: none;
    padding-left: 40px;
    padding-right: 40px;
    background: transparent;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    min-height: 2rem;
    height: 30px;
    border-radius: 5px;
}
.input-group-2 h3{
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
}
.input-group-2 label{
    position: absolute;
    z-index: 1;
    font-size: 1rem;
    transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
    color: rgba(255, 255, 255, 0.7);
    transition-duration: 250ms;
    margin-top: 16px;
    left: 32rem;
    
}

/*search box animation*/
.input-group-2 input:valid ~ label,
.input-group-2 input:focus ~ label
{
    transform: translateY(-11px);
    font-size: small;
}
.mail-box-2{
    margin-top: 20px;
    margin-left: 20px;
}

.input-group-2 button:hover{
   background-color:  rgb(193, 17, 25);
}

`;

export default SignUpBody;