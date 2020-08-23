import React from 'react';
import './App.css';
import Portrait, { Shape }  from './Portrait';
import corgi from '../assets/images/corgi.jpg';

function App() {
  return (
    <div className="App">
      <Portrait 
        name="Vincent Chou" 
        shape={Shape.CIRCLE}
        location={corgi} />
    </div>
  );
}

export default App;
