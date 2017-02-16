import React from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { setDescription, setValue, setAmount, setMultipier, setTotal, setFullTotal, getFullTotal } from '../../redux/actions';


@connect((store) => {
    return {
        user: store.user,
    };
})
class RootViewTree extends React.Component {
    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);

        this.state = {

            total: this.props.user.total,
            fulltotal: this.props.user.fulltotal,
        }
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

    dataChanged(data) {
        console.log(data)
        let total = data.total
        console.log(store.getState())
    }

    render() {
        return (
            <span>
                <label>Łącznie:</label>
                <input type="text" ref="fulltotal" value={ this.state.fulltotal } style={{  maxWidth: 50 }} />
            </span>
        );
    }
}

export default RootViewTree;