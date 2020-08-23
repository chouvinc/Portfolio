import React from 'react';
import './App.css';
import Portrait, { Shape }  from './Portrait';
import Banner, {Link} from './Banner';
import corgi from '../assets/images/corgi.jpg';
import Block from './Block';

function App() {
  return (
    <div className="App">
      <Banner items={[{text: "hello", path: "path/to"}]}/>
      <Block height={100} width={100} childComponents={[
        new Portrait({name: "Vincent Chou", shape: Shape.CIRCLE, location: corgi})
      ]}/>

    </div>
  );
}

export default App;
