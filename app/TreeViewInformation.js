import React from 'react';
import InlineEdit from '../node_modules/react-edit-inline/index';
import actions from './redux/actions';
import { connect } from 'react-redux';
import store from './redux/store';
import { setDescription, setValue } from './redux/actions';

@connect((store) => {
    return {
        user: store.user,
    };
})
class TreeViewInformation extends React.Component {
    constructor(props){
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
        this.state = {
            message: this.props.user.description
        }
    }

    componentWillMount(){
        console.log(store.getState())
    }

    dataChanged(data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
        console.log(data)
        this.setState({ message: Object.values(data) })

        // ustaw dane dla żródła prawdy
        this.props.dispatch(setDescription(data.message))
        this.props.dispatch(setValue(24))
        console.log(store.getState())
        
    }

    customValidateText(text) {
        return (text.length > 0 && text.length < 64);
    }

   render() {
//setName('abecadlo')
       //console.log(store.getState())
      /* console.log(this.props.user)*/
        return (<span>
            <InlineEdit
                validate={this.customValidateText}
                activeClassName="editing"
                text={this.state.message}
                paramName="message"
                change={this.dataChanged}
                style={{
                    backgroundColor: 'yellow',
                    minWidth: 100,
                    display: 'inline-block',
                    margin: 0,
                    padding: 0,
                    fontSize: 15,
                    outline: 0,
                    border: 0
                }}
            />
            Zmieniono na: {this.state.message}
        </span>)
    }

}


export default TreeViewInformation;