import React from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { setDescription, setValue, setAmount, setMultipier, setTotal, setFullTotal, getFullTotal } from '../../redux/actions';
import InlineEdit from '../../../node_modules/react-edit-inline/index';


@connect((store) => {
    return {
        user: store.user,
    };
})
class EditableViewTree extends React.Component {
    constructor(props){
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
        this.state = {
            // pole komponentowe : pole w store
            number: this.props.user.number,
            description: this.props.user.description,
            amount: this.props.user.amount,

        }

    }


    dataChanged(data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
        console.log(data)

        let number = data.number
        let description = data.description
        let amount = data.amount


        if(number != undefined){
            // ustaw dane dla żródła prawdy
            this.setState({ number: number })
            //this.props.dispatch(setNumber(number))
        }
        if(description != undefined) {
            this.setState({description: description })
            //this.props.dispatch(setDescription(description))
        }
        if(amount != undefined) {
            this.setState({amount: amount })
            //this.props.dispatch(setAmount(amount))
        }


        console.log(store.getState())

    }

    customValidateText(text) {
        return (text.length > 0 && text.length < 64);
    }


    render() {
        return (
            <span>
         {/* Number Inline Edit Component */}
                <InlineEdit
                    validate={this.customValidateText}
                    activeClassName="editing"
                    text={this.state.number}
                    paramName="number"
                    change={this.dataChanged}
                    style={{
                        backgroundColor: 'white',
                        minWidth: 100,
                        maxWidth: 100,
                        display: 'inline-block',
                        margin: 0,
                        padding: 0,
                        fontSize: 15,
                        outline: 0,
                        border: 0
                    }}
                />
                {/*  => {this.state.description}*/}

                {/* Description Inline Edit Component */}
                <InlineEdit
                    validate={this.customValidateText}
                    activeClassName="editing"
                    text={this.state.description}
                    paramName="description"
                    change={this.dataChanged}
                    style={{
                        backgroundColor: 'white',
                        minWidth: 100,
                        maxWidth: 100,
                        display: 'inline-block',
                        margin: 0,
                        padding: 0,
                        fontSize: 15,
                        outline: 0,
                        border: 0
                    }}
                />
                {/*  => {this.state.description}*/}

                {/* Amount Amount Edit Component */}
                <InlineEdit
                    validate={this.customValidateText}
                    activeClassName="editing"
                    text={this.state.amount}
                    paramName="amount"
                    change={this.dataChanged}
                    style={{
                        backgroundColor: 'white',
                        minWidth: 100,
                        maxWidth: 100,
                        display: 'inline-block',
                        margin: 0,
                        padding: 0,
                        fontSize: 15,
                        outline: 0,
                        border: 0
                    }}
                />
                {/*  => {this.state.amount}*/}
             </span>
        );
    }
}

export default EditableViewTree;