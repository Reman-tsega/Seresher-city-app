import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Allmeetapp from './Social-post/component/Layout/Pages/Allmeetapp';
import Newmeetapp from './Social-post/component/Layout/Pages/Newmeetapp';
import Favoritemeetapp from './Social-post/component/Layout/Pages/Favoritemeetapp';
import Layout from './Social-post/component/Layout/Layout';
import FavoriteContextProvider from './Social-post/component/Store/FavoriteContextProvider';

function App() {

  return (
    <Layout>
        {/* <Route path='/' element={}></Route> */}
    <Routes>
        <Route path='/' element={<Allmeetapp/>}></Route>
        <Route path="/Newmeetapp" element={<Newmeetapp />}></Route>
        <Route path="/Favoritemeetapp" element={<Favoritemeetapp />}></Route> 
    </Routes>
  </Layout>
  );
}

export default App;
