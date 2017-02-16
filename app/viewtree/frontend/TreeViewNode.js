import React from 'react';
import ChildViewTree  from './ChildViewTree'
import RootViewTree  from './RootViewTree'
import EditableViewTree from './EditableViewTree'

class TreeViewInformation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: 5
        }
    }

   render() {
        return (
            <span>
            <EditableViewTree/>
            {this.props.kind === 'root' ?
                <RootViewTree /> : ''}
            {this.props.kind === 'leaf' ?
                <ChildViewTree /> : ''}
            </span>
        )
    }
}


export default TreeViewInformation;