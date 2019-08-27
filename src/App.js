import React from 'react';
import './App.css';
import Main from './components/Main';
import Aside from './components/Aside';

function App() {
  return (
    <div id="content">
      <Aside />
      <Main />      
    </div>
  );
}

export default App;
