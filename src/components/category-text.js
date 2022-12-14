import '../App.css';
import React from 'react' 
 
function CateText(props){  
    return( 
            <> 
                <h2>{props.heading}</h2>
                <p>{props.para}</p>
            </> 
    )
}
export default CateText;  
