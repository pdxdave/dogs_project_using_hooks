import React from 'react';

const Exercise = (props) => {
    return (
        <div>
            <p style={{fontSize: "24px"}}>{props.dog.exercise}</p>
        </div>
    )
}
export default Exercise;