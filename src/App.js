import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./HomeScreen";
import Banner from "./Banner";
import requests from './Requests';

function App() {
  return (
    <div className="app">
        <HomeScreen />
    </div>
  );
}

export default App;
