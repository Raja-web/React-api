import '../App.css';
import React from 'react' 
import { Link } from 'react-router-dom';
 
function Header(){  
    return( 
        <div className="w-100 bgcolor">
        <div className="container">
            <div className="header"> 
                 <Link to={`/`}>
                    <span>Home</span>
                 </Link>
                 <Link to={`products/category/jewelery`}>
                    <span>Jewelery</span>
                 </Link>
                 <Link to={`products/category/electronics`}>
                    <span>Electronics</span>
                 </Link>
                 <Link to={`products/category/mensclothing`}>
                    <span>Men's Clothing</span>
                 </Link>
                 <Link to={`products/category/womensclothing`}>
                    <span>Women's Clothing</span>
                 </Link>
            </div> 
            </div>
            </div>
    )
}
export default Header;  
