import React from "react";

const Images = (props) => {
    console.log(props, '<-----')
    return(
        <div>
            Hola {props.saludo}
            <img src={props.url} />
        </div>
    )
}

export default Images