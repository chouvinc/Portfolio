import React from 'react';
import '../assets/css/Block.css';

type BlockProps = {
    height?: string;
    width?: string;
    // defaults to white
    color?: string;
    alignment?: string;
    margin?: string;
    id?: string;
}

class Block extends React.Component<BlockProps> {
    render() {
        return (
            <div id={this.props.id} className="block" style={
                {
                    height: this.props.height,
                    width: this.props.width,
                    backgroundColor: this.props.color ? this.props.color: "white",
                    alignContent: this.props.alignment ? this.props.alignment: "center",
                    justifyContent: this.props.alignment ? this.props.alignment: "center",
                    margin: this.props.margin
                }}>
                {this.props.children}
            </div>
        );
    }
}

export default Block;