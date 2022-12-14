import '../App.css';
import React, { useState } from 'react';

function Create()
{

    const [title, setTitle] = useState("");
    const[category, setCategory]= useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const[rate, setRate]= useState("");
    const[count, setCount]= useState("");
    const[message, setMessage]= useState("");

let handlesub = async (e) =>{
    e.preventDefault();
    try{
        let res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            category: category,
            description: description,
            image: img,
            price: price,
            rating:{rate:rate, count:count},
        }),
      });
       console.log(res);
      let resJson = await res.json();
      if(res.status===200)
      {
        setTitle("");
        setCategory("");
        setDescription("");
        setPrice("");
        setImg("");
        setRate("");
        setCount("");
        setMessage("New Product created successfully"); 
      }
      else
      {
        setMessage("Some error occured");
      }
    }
    catch (err) {
        console.log(err);
        return false;
      }

}


    return(
        <div className="container">
            
            <div className="form-box">
            <h2>Create a Product</h2>
            <form onSubmit={handlesub}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
                <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Category' />
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder='Description' />
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder='Price' />
                <input type="file" className="bg_transpanrent" value={img} onChange={(e)=>setImg(e.target.value)}  placeholder='Image' />
                <input type="text" value={rate} onChange={(e)=>setRate(e.target.value)} placeholder='Rate' />
                <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} placeholder='Count' />
                <button type="submit">Create</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
            </div>
        </div>

    );

}

export default Create; 