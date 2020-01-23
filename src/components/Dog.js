import React from 'react';
import {useParams} from 'react-router-dom'
import dogs from '../data';

const Dogs = () => {
    const {id} = useParams()
    const featureDog = dogs.find(dog => id === `${dog.id}`)

    return(
        <div>
            <img src={featureDog.image} alt={featureDog.breed}/>
            <p>{featureDog.breed}</p>
        </div>
    )
}
export default Dogs