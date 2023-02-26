import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import PostView from './components/PostView/PostView';
import FormPage from './components/Form/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={ <LandingPage/> } />
      <Route path='/Postview' element={ <PostView/> } />
      <Route  path='FormPage' element={ <FormPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;