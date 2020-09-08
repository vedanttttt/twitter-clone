import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Tweets from './components/Tweets';
import Trends from './components/Trends';

function App() {
  return (
    <div className="twitter">
      <SideBar />
      <Tweets />
      <Trends />
    </div>
  );
}

export default App;
