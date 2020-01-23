import React from 'react'

const Grooming = (props) => {
    return (
        <div>
            <p style={{fontSize: "24px"}}>{props.dog.grooming}</p>
        </div>
    )
}
export default Grooming