import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Tweets from './components/Tweets';

function App() {
  return (
    <div className="twitter">
      <SideBar />
      <Tweets />
    </div>
  );
}

export default App;
