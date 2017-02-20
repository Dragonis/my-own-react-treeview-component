import React from 'react';
import ChildNode  from './ChildNode'
import ParentNode  from './ParentNode'

class TreeView extends React.Component {


   render() {
        return (
            <span>
                {this.props.kind === 'root' ?
                <ParentNode /> : ''}
            {this.props.kind === 'leaf' ?
                <ChildNode /> : ''}
            </span>
        )
    }
}


export default TreeView;