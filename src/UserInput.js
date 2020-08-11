import React from 'react';

const Input = (props) => {

    return (
        <div>
            <p>
                <input type="text"
                    onChange={props.changed}
                    currentuser={props.value} >

                </input>
            </p>

        </div>
    )
}

export default Input
