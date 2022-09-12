import React, { Component } from 'react';
import About from './component/About/About';
import Header from './component/Header/Header';
import TodoApp from './component/TodoApp/TodoApp';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

export default ()=> {
  
    return (

      <BrowserRouter>
            <Header/>

      <Routes>

        <Route path='/' exact element={<TodoApp/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
     
    );
  
};
