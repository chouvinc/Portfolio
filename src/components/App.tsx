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
      <Block height="50em," color="#e6e6e6" alignment="start">
          <Block height="50em" width="50%" margin="0 20px">
            <p>About me</p>
          </Block>
          <Block color="pink" width="50%" margin="0 20px"/>
      </Block>
      <Block height="50">
        <Portrait name="Vincent Chou" shape={Shape.CIRCLE} location={corgi}/>
      </Block>
    </div>
  );
}

export default App;
