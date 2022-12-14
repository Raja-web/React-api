import '../App.css';
import React from 'react'// have to import this line for react component
 
function Card(props){ 
//here you have props, but called card.image instead of props.card.image
// recall the props bro . and rest of the thing good! 
    return( 
            <div className="card-box"> 
                <img className="img-wid" src={props.Image} alt="Product Image"/>
                <h4>{props.title}</h4> 
                <p>{props.price}</p>
            </div> 
    )
}
export default Card; 