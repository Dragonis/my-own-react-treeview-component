import React from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import {observer} from 'mobx-react';
import { setValue, setTotal, setFullTotal, getFullTotal } from '../../redux/actions';
import InlineEdit from '../../../node_modules/react-edit-inline/index';


@connect((store) => {
    return {
        user: store.user,
    };
})
@observer
class RootViewTree extends React.Component {
    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);

        this.state = {
            number: this.props.user.number,
            description: this.props.user.description,
            total: this.props.user.total,
            fulltotal: this.props.user.fulltotal,
        }
    }
    dataChanged(data) {
        console.log(data)

        let number = data.number
        let description = data.description

        if(number != undefined){
            // ustaw dane dla żródła prawdy
            this.setState({ number: number })
            //this.props.dispatch(setNumber(number))
        }
        if(description != undefined) {
            this.setState({description: description })
            //this.props.dispatch(setDescription(description))
        }


        console.log(store.getState())

    }

    customValidateText(text) {
        return (text.length > 0 && text.length < 64);
    }

    setTotal(total){
        this.setState({total: total})
        this.props.dispatch(setTotal(total))
    }

    getTotal(){
        let total = store.getState().user.total
        console.log(total)
        return total
    }

    // aktualizuje wartosc stanu, w momencie gdy inny komponent bedzie chcial ta zmienna zaktualizowac
    componentWillReceiveProps(){
        this.setState({fulltotal: store.getState().user.fulltotal})
        setFullTotal(this.state.fulltotal)

    }

    dataChanged(data) {
        console.log(data)
        let total = data.total
        console.log(store.getState())
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


                <label>Łącznie:</label>
                <input type="text" ref="fulltotal" value={ this.state.fulltotal } style={{  maxWidth: 50 }} />
            </span>
        );
    }
}

export default RootViewTree;