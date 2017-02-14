import React from 'react';
import InlineEdit from '../node_modules/react-edit-inline/index';
import actions from './redux/actions';
import { connect } from 'react-redux';
import store from './redux/store';
import { setDescription, setValue, setAmount, setMultipier, setTotal } from './redux/actions';

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
            // pole komponentowe : pole w store
            number: this.props.user.number,
            description: this.props.user.description,
            amount: this.props.user.amount,
            multipier: this.props.user.multipier,
            total: this.props.user.total,

        }

    }

    componentWillMount(){


           /*  this.setState({amount: amount})
             this.props.dispatch(setAmount(amount))*/

        /*this.setState({multipier: "0,5"})
        this.props.dispatch(setMultipier("0,5"))

         this.setState({total: "500"})
         this.props.dispatch(setTotal("500"))*/

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
     /*   if(amount != undefined) {
            this.setState({multipier: multipier})
            this.props.dispatch(setMultipier(multipier))
        }
        if(total != undefined) {
            this.setState({total: total})
            this.props.dispatch(setTotal(total))
        }*/

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
            {/* Number Inline Edit Component */}
            <InlineEdit
                validate={this.customValidateText}
                activeClassName="editing"
                text={this.state.number}
                paramName="number"
                change={this.dataChanged}
                style={{
                    backgroundColor: 'yellow',
                    minWidth: 50,
                    maxWidth: 50,
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
                    backgroundColor: 'orange',
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
                    backgroundColor: 'aqua',
                    minWidth: 60,
                    maxWidth: 60,
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

            {/* value={ this.state.multipier } - w tej zmienn je przechowywana jest wartosc wpisana do inputa.*/}

            <input type="text" ref="multipier" style={{  maxWidth: 50 }} />
            <button type="button" onClick={ (e) => {
                this.setMultipier(this.refs.multipier.value)
                this.setTotal( this.state.amount * this.refs.multipier.value
                );  } } >Mnóż</button>

            <label>{this.props.kind === 'root' ? 'Łącznie:' : 'Suma:'} </label>
           <input type="text" ref="total" value={ this.state.total } style={{  maxWidth: 50 }} />
            <button type="button" onClick={  (e) => { this.setTotal(0); } }>Zeruj</button>
            {this.props.kind}
            </span>)
    }

}


export default TreeViewInformation;