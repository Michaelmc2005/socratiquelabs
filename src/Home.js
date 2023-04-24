import React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import Shake from 'react-reveal/Shake';

function Home() {
    return (
        <div className="home">
            <div className="home__img">

                    <img src="./images/studentStudying.png" alt="studentStuding" />

            </div>
            <div className="home__wrapper">
                <div className="home__wrapper__div1">
                    <Zoom left>
                        <h2>Welcome to <span> Socratique.</span></h2>
                    </Zoom>
                    <Zoom left>
                        <h2>Log In to Get Started!</h2>
                    </Zoom>
                </div>
                <div className="home__wrapper__div2">
                    <Link to='/login' className="home__btn">
                        <Zoom left>
                            <Shake>
                                <Button variant="contained" color="primary" className="shk" >
                                    <p className="home__btnText">Log in As a Teacher</p>
                                </Button>
                            </Shake>
                        </Zoom>
                    </Link>
                    <br />
                    <Link to='/login' className="home__btn">
                        <Zoom left>
                            <Shake>
                                <Button variant="contained" color="primary" className="shk">
                                    <p className="home__btnText">Log in As a Student</p>
                                </Button>
                            </Shake>
                        </Zoom>
                    </Link>
                </div>
                <p>Revolutionising learning</p>
            </div>
           
        </div>
    )
}

export default Home
