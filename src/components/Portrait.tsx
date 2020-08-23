import React from 'react';
import './Portrait.css';

export enum Shape {
  SQUARE = "square",
  CIRCLE = "circle",
  HEXAGON = "hexagon"
}

type PortraitProps = {
  name: string;
  shape: Shape;
  location: string;
} 

class Portrait extends React.Component<PortraitProps> {
  render() {
    return (
      <div className={this.props.shape}>
        <img alt="" src={this.props.location}/>
        <h1>Hello, world!</h1>
        <h2>This is {this.props.name}.</h2>
      </div>
    );
  }
}

export default Portrait;