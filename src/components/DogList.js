import React from 'react';
import dogs from '../data'

const DogList = () => {

    return(
        <div className="dog-container">
            
            {dogs.map(dog => (
                <div className="dog-card" key={dog.id}>
                    <img style={{height: "250px"}} src={dog.image} alt="dogPicture"/>
                    <h3>{dog.breed}</h3>
                </div>
            ))}
        </div>
    )
}
export default DogList