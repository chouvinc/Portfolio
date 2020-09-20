import React from 'react';
import '../assets/css/App.css';
import Portrait, { Shape } from './Portrait';
import Banner from './Banner';
import corgi from '../assets/images/corgi.jpg';
import Block from './Block';
import GraphUtils from '../utils/GraphUtils';

type AppProps = {}

class App extends React.Component<AppProps> {
  componentDidMount() {
    GraphUtils.buildGraphInTag("graph", 15)
  }

  render() {
    return (
      <div className="App">
        <Banner items={[{ text: "hello", path: "path/to" }]} />
        <Block height="50em," color="#e6e6e6" alignment="start">
          <Block height="50em" width="50%" margin="0 20px">          
            <Portrait name="Vincent Chou" shape={Shape.CIRCLE} location={corgi} />
          </Block>
          <Block id="graph" color="#e6e6e6" width="50%" margin="0 20px" alignment="center" />
        </Block>
        <Block color="#e6e6e6" height="50">
          
        </Block>
      </div>
    );
  }
}

export default App;
