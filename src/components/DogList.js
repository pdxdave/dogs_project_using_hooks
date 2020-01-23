import React from 'react';
// import dogs from '../data'
import {Link} from 'react-router-dom'

const DogList = (props) => {

    return(
        <div className="dog-container">
        
            {props.dogs.map(dog => (
                <Link to={`dog-list/${dog.id}`} style={{textDecoration: 'none'}}>
                    <div className="dog-card" key={dog.id}>
                        <img style={{height: "250px"}} src={dog.image} alt="dogPicture"/>
                        <h3>{dog.breed}</h3>
                    </div>
                </Link>
            ))}
        
        </div>
    )
}
export default DogList