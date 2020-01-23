import React from 'react';
import dogPic from '../img/dog3.jpg'
// import { url } from 'inspector';


const Home = () => {
    return(
        <div>
            <div className="dogImageContainer">
                <img className="dogPic" src={dogPic} alt="dogPicture"/>
            </div>
        </div>
    )
}
export default Home