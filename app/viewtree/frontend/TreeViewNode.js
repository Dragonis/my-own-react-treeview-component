import React from 'react';
import InlineEdit from '../../../node_modules/react-edit-inline/index';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { setDescription, setValue, setAmount, setMultipier, setTotal, setFullTotal, getFullTotal } from '../../redux/actions';
import  ChildViewTree  from './ChildViewTree'
import  RootViewTree  from './RootViewTree'
import EditableViewTree from './EditableViewTree'

class TreeViewInformation extends React.Component {

   render() {

        return (
            <span>

            <EditableViewTree/>
            {this.props.kind === 'root' ?  <RootViewTree/> : ''}
            {this.props.kind === 'leaf' ?  <ChildViewTree/> : ''}

            </span>)
    }

}


export default TreeViewInformation;