import '../App.css';
import React from 'react' 
 
function Card(props){   
    return( 
            <div className="card-box"> 
                <img className="img-wid" src={props.Image} alt="Product Image"/>
                <h4>{props.title}</h4> 
                <p><b>$</b>{props.price}</p> 
            </div> 
    )
}
export default Card; 