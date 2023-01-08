import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./HomeScreen";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
        <HomeScreen />
        <Banner />
    </div>
  );
}

export default App;
