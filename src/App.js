import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Headers } from "./components/layouts/Headers"
import { Content } from "./components/layouts/content"
export const App = () => {
  return (
    <div className="App">
      <Headers />
      <Content />
    </div>
  );
}

export default App;
