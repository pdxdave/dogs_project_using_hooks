import React from 'react';

const About = (props) => {
    return(
        <div>
            <p style={{fontSize: "24px"}}>{props.dog.about}</p>
        </div>
    )
}

export default About;