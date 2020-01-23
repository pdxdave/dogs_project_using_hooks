import React from 'react';
import {useParams, useRouteMatch, Route, NavLink, Switch} from 'react-router-dom'
import About from './About'
import Exercise from './Exercise'
import Training from './Training'
import Grooming from './Grooming'

const Dogs = (props) => {
    const {id} = useParams()
    const featureDog = props.dogs.find(dog => id === `${dog.id}`)

    const {path, url} = useRouteMatch()

    return(
        <div>
        <div className="dog-card-wrapper">
            <div className="dog-card-image">
                <img src={featureDog.image} alt={featureDog.breed}/>
            </div>
            <div className="dog-card-data">
                <h3>{featureDog.breed}</h3>
                <p>AKC Popularity: {featureDog.popularity}</p>
                <p>Height: {featureDog.height}</p>
                <p>Weight: {featureDog.weight}</p>
                <p>Life Expectency: {featureDog.life_expectancy}</p>
            </div>
            
        </div>
        <div className="breed-information">
            <nav className="dog-info-nav">
                <NavLink to={`${url}/about`} activeClassName="activeClass" className="dog-nav-by-topic" >About</NavLink>
                <NavLink to={`${url}/exercise` } activeClassName="activeClass" className="dog-nav-by-topic">Exercise</NavLink>
                <NavLink to={`${url}/training`} activeClassName="activeClass" className="dog-nav-by-topic">Training</NavLink>
                <NavLink to={`${url}/grooming`} activeClassName="activeClass" className="dog-nav-by-topic">Grooming</NavLink>
            </nav>
            <Switch>
                <Route path={`${path}/about`}>
                    <About dog={featureDog}/>
                </Route>
                <Route path={`${path}/exercise`}>
                    <Exercise dog={featureDog}/>
                </Route>
                <Route path={`${path}/training`}>
                    <Training dog={featureDog}/>
                </Route>
                <Route path={`${path}/grooming`}>
                    <Grooming dog={featureDog}/>
                </Route>
            </Switch>
        </div>
    </div>
    )
}
export default Dogs