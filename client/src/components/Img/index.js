import React from "react";

 export function Image(props){
    return(
    <div>
    <img className="responsive-img"src={props.src}/>
    </div>
    );
}
