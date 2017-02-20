import React from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { setDescription, setAmount, setMultipier, setTotal, setFullTotal, getFullTotal, getNumberChildrensFromStore, setNumberChildrensToStore} from '../../redux/actions';
import InlineEdit from '../../../node_modules/react-edit-inline/index';


@connect((store) => {
    return {
        user: store.user,
    };
})
class MultipierContainer extends React.Component {
    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            number: this.props.user.number,
            description: this.props.user.description,
            amount: this.props.user.amount,
            multipier: this.props.user.multipier,
            total: this.props.user.total,
            fulltotal: this.props.user.fulltotal,
            numberchilds: this.props.user.numberchilds
        }
    }

    dataChanged(data) {
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

    setMultipier(multipier){

        let output = this.state.total * this.state.numberchilds

        this.setFullTotal(output)
        this.props.dispatch(setFullTotal(output))

        this.setState({multipier: multipier})
        this.props.dispatch(setMultipier(multipier))

        console.log("Łącznie: " + output)
    }

    setFullTotal(fulltotal) {
        this.setState({fulltotal: fulltotal});
        this.props.dispatch(setFullTotal(fulltotal))
    }

    getFullTotal(){
        let fulltotal = store.getState().user.fulltotal
        console.log(fulltotal)
        return fulltotal
    }

    setTotal(total){
        this.setState({total: total})
        this.props.dispatch(setTotal(total))
    }

    getMultipier(){
        let multipier = store.getState().user.multipier
        console.log(multipier)

        return multipier
    }

    getTotal(){
        let total = store.getState().user.total
        console.log(total)
        return total
    }

    dataChanged(data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
        console.log(data)

        let number = data.number
        let description = data.description
        let amount = data.amount
        let multipier = data.multipier
        let total = data.total

        if(number != undefined){
            // ustaw dane dla żródła prawdy
            this.setState({ number: number })
            this.props.dispatch(setNumber(number))
        }
        if(description != undefined) {
            this.setState({description: description })
            this.props.dispatch(setDescription(description))
        }
        if(amount != undefined) {
            this.setState({amount: amount })
            this.props.dispatch(setAmount(amount))
        }
        console.log(store.getState())
    }

    handleChange(event) {
        this.setState({multipier: event.target.value});
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



                            <label>Mnożnik:</label>
        <input type="number" step="0.1" ref="multipier" value={ this.state.multipier }   onChange={this.handleChange} style={{  maxWidth: 50 }} />
        <button type="button" onClick=
         {
            (e) =>
            {
                this.setMultipier(this.refs.multipier.value)
                let output = this.state.amount * this.refs.multipier.value
                this.setTotal( output );
            }
        } >Mnóż</button>

            <label>{this.props.kind === 'root' ? 'Łącznie:' : 'Suma:'} </label>
            <input type="text" ref="total" value={ this.state.total } style={{  maxWidth: 50 }} />
            <button type="button" onClick={
                (e) =>
                    {
                        this.setTotal(0);
                    }   }> Zeruj </button>
            {this.props.data}
            </span>
        );
    }
}

export default MultipierContainer;