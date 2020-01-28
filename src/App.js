import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Profile from './components/content/Content';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Profile />
      
    </div>
  );
}

export default App;
