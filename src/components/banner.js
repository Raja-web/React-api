import '../App.css';
import React from 'react' 
 
function Banner(props){  
    return( 
            <div className="inside-page"> 
                <img className="banner-wid" src={props.BannerImage} alt="Banner Image"/> 
            </div> 
    )
}
export default Banner; 