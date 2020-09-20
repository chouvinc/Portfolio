import React from 'react';
import '../assets/css/Portrait.css';

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
      </div>
    );
  }
}

export default Portrait;