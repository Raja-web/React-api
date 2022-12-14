import Card from "./components/";
import Banner from "./components/banner.js";
import './App.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CateText from "./components/category-text";

function Main() {

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
    <div className="App">
{/* 
      <h1>Learn React API</h1> */}
      <Banner BannerImage="../image-banner.png" />
      <div className="main-container">
        <div className="dis-div w-100">
          <CateText heading="Jewelery" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
        <div className="dis-div w-100">
          <div className="dis-flex">
            {arr.filter(name => name.category.includes("jewelery")).map(arrs => {
              return (
                <Link to={`/products/${arrs.id}`}>
                  <Card key={arrs.id} title={arrs.title} price={arrs.price} Image={arrs.image} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="dis-div w-100">
          <CateText heading="Electronics" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
<div className="dis-div w-40">
             <img className="left-image" src="../pexels-photo-821651.webp" alt="Women's clothing" />
        </div>
        <div className="dis-div w-100 w-60">
          <div className="dis-flex">
            {arr.filter(name => name.category.includes("electronics")).map(arrs => {
              return (
                <Link to={`/products/${arrs.id}`}>
                  <Card key={arrs.id} title={arrs.title} price={arrs.price} Image={arrs.image} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
 
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
      
      <div className="main-container">
        <div className="dis-div w-100">
          <CateText heading="Women's Clothing" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>

        <div className="dis-div w-40">
             <img className="left-image" src="../pexels-photo-821651.webp" alt="Women's clothing" />
        </div>

        <div className="dis-div w-60">
          <div className="dis-flex">
            {arr.filter(name => name.category.includes("women's clothing")).map(arrs => {
              return (
                <Link to={`/products/${arrs.id}`}>
                  <Card key={arrs.id} title={arrs.title} price={arrs.price} Image={arrs.image} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
