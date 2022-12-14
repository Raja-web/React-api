import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./mainpage"; 
import React from 'react';
import Insidepage from "./components/insidepage";
import Create from "./components/create";
import Header from './components/header';
import Jewelery from './components/jewelery';
import Electronics from './components/electronics';
import MensClothing from './components/mensclothing';
import WomensClothing from './components/womensclothing';

function App() { 
  return (
    <div className="App"> 
     <Header />
    <Routes>
        <Route exact path="/" element={<Main />}/>Home  
        <Route exact path="/products/:id" element={<Insidepage />}/>
        <Route exact path="/products/create" element={<Create />}/> 
        <Route exact path="/products/category/jewelery" element={<Jewelery />}/> 
        <Route exact path="/products/category/electronics" element={<Electronics />}/> 
        <Route exact path="/products/category/mensclothing" element={<MensClothing />}/>
        <Route exact path="/products/category/womensclothing" element={<WomensClothing />}/> 
     </Routes>
  
  </div>
  
  );
}

export default App;
