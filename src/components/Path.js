import React from 'react';
import DocumentMeta from 'react-document-meta';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Apple from "./apple/Apple";
import Home from "./home/Home";
import More from "./more/More";
import Navbar from './navbar/Navbar';
import Prices from "./price/Prices";
import Reviews from "./reviews/Reviews";
import Videos from "./videos/Videos";
export default function Path() {
  const meta = {
    title: 'Some Meta Title',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
      <DocumentMeta {...meta}>
      <Routes>
        
      
        <Route path="/" element ={<Navigate to ="/home"/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/prices" element={<Prices/>} />
        <Route path="/apple" element={<Apple/>} />
        <Route path= "/videos" element={<Videos/>}/>
        <Route path="/more" element ={<More/>}/>
  
       
        
          </Routes>


      </DocumentMeta >
      
    </BrowserRouter>
    </div>
  
  );
}
