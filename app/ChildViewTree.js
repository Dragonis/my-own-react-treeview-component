import React from 'react';
import { connect } from 'react-redux';
import store from './redux/store';
import { setDescription, setValue, setAmount, setMultipier, setTotal, setFullTotal, getFullTotal } from './redux/actions';


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
            // pole komponentowe : pole w store

            amount: this.props.user.amount,
            multipier: this.props.user.multipier,
            total: this.props.user.total,
            fulltotal: this.props.user.fulltotal,
        }
    }

    setMultipier(multipier){
        this.setState({multipier: multipier})
        this.props.dispatch(setMultipier(multipier))
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
                            <label>Mnożnik:</label>
        <input type="text" ref="multipier" value={ this.state.multipier }   onChange={this.handleChange} style={{  maxWidth: 50 }} />
        <button type="button" onClick={ (e) => {
            this.setMultipier(this.refs.multipier.value)
            let output = this.state.amount * this.refs.multipier.value
            this.setTotal( output
            );  } } >Mnóż</button>

                  <label>{this.props.kind === 'root' ? 'Łącznie:' : 'Suma:'} </label>
           <input type="text" ref="total" value={ this.state.total } style={{  maxWidth: 50 }} />
            <button type="button" onClick={ (e) => { this.setTotal(0); }   }>Zeruj</button>

            </span>
        );
    }
}

export default MultipierContainer;