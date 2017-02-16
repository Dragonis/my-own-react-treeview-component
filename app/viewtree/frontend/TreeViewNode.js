import React from 'react';
import ChildViewTree  from './ChildViewTree'
import RootViewTree  from './RootViewTree'

class TreeViewInformation extends React.Component {


   render() {
        return (
            <span>
                {this.props.kind === 'root' ?
                <RootViewTree /> : ''}
            {this.props.kind === 'leaf' ?
                <ChildViewTree /> : ''}
            </span>
        )
    }
}


export default TreeViewInformation;