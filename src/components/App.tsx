import React from 'react';
import '../assets/css/App.css';
import Portrait, { Shape } from './Portrait';
import Banner, { Link } from './Banner';
import corgi from '../assets/images/corgi.jpg';
import Block from './Block';
import * as d3 from 'd3';

type AppProps = {}

class App extends React.Component<AppProps> {
  componentDidMount() {
    const vis = d3.select("#graph")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200);

    const nodes = [
        {x: 10, y: 50},
        {x: 70, y: 10},
        {x: 140, y: 50}   
    ]

    vis.selectAll("circle .nodes")
        .data(nodes)
        .enter()
        .append("svg:circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", "10px")
        .attr("fill", "black");
  }

  render() {
    return (
      <div className="App">
        <Banner items={[{ text: "hello", path: "path/to" }]} />
        <Block height="50em," color="#e6e6e6" alignment="start">
          <Block height="50em" width="50%" margin="0 20px">
            <p>About me</p>
          </Block>
          <Block id="graph" color="pink" width="50%" margin="0 20px" alignment="center" />
        </Block>
        <Block height="50">
          <Portrait name="Vincent Chou" shape={Shape.CIRCLE} location={corgi} />
        </Block>
      </div>
    );
  }
}

export default App;
