import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Insidepage(){ 
const [data, setData] = useState();
const { id } = useParams();
  const fetchPosts = async () =>
   {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const products = await response.json(); 
        setData(products);
   };
   
   useEffect(()=>
   {
    fetchPosts();
   }, []);

   if (!data) {
    return <div>Loading...</div>;
  }

    return (
      <div className="container">
        <div className="inside-page">
            <img className="banner-image" src={data.image} alt="Images"/>
            <h2>{data.title}</h2>
            <div className="sub-head">
                <span><b>Category: </b>{data.category}</span>
                <span><b>$</b>{data.price}</span>  
                  </div>
                  <div className="sub-head">
                <span><b>Rating: </b>{data.rating.rate}</span>
                <span><b>Count: </b>{data.rating.count}</span>  
                  </div> 
                  <p>{data.description}</p>
        </div>
        </div>

    );
}
export default Insidepage;