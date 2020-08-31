import React from 'react';
import './Block.css';

type BlockProps = {
    height: string;
    width?: string;
    // defaults to white
    color?: string;
}

class Block extends React.Component<BlockProps> {
    render() {
        return (
            <div className="block" style={
                {
                    height: `${this.props.height}em`,
                    width: this.props.width ? this.props.width: "100%",
                    backgroundColor: this.props.color ? this.props.color: "white"
                }}>
                {this.props.children}
            </div>
        );
    }
}

export default Block;