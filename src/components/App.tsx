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
      <Block height="100em">
        <Portrait name="Vincent Chou" shape={Shape.CIRCLE} location={corgi}/>
      </Block>
      <Block height="100em" color="#e6e6e6">

      </Block>
    </div>
  );
}

export default App;
