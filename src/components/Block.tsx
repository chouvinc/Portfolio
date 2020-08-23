import React from 'react';
import './Block.css';

type BlockProps = {
    // numbers in em units
    height: number;
    width: number;
    childComponents: Array<React.Component>
}

class Block extends React.Component<BlockProps> {
    render() {
        let childCom
        return (
            <div className = "block">
                {/* {this.props.childComponents} */}
            </div>
        );
    }
}

export default Block;