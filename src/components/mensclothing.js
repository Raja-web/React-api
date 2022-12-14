import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Card from '../components/index';
import { Link } from "react-router-dom";
import CateText from './category-text';

function MensClothing(){  
        const [arr, setArr] = useState([]);
        const fetchPost = async () => {
          const response = await fetch('https://fakestoreapi.com/products');
          //todo explore .json()
          const data = await response.json();
          console.log(data);
          setArr(data);
        };

        useEffect(() => {
          fetchPost();
        }, []);
    return (
        <div className="main-container">
        <div className="dis-div w-100">
          <CateText heading="Men's Clothing" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>

        <div className="dis-div w-100">
          <div className="dis-flex">
            {arr.filter(name => name.id < 5).map(arrs => {
              return (
                <Link to={`/products/${arrs.id}`}>
                  <Card key={arrs.id} title={arrs.title} price={arrs.price} Image={arrs.image} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

    );
}
export default MensClothing;