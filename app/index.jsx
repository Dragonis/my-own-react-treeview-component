import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './tree-view';
import  { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// include babel modules
import 'babel-core/register';

// load font awesome
import 'font-awesome-webpack';

const reducer = function(state,action) {
    if(action.type === "INC"){
        return state + action.payload;
    }
    if(action.type === "DEC"){
        return state - action.payload;
    }
    return state;
};

const store = createStore(reducer, 0);

store.subscribe( () => { console.log("store changed", store.getState()) } );

store.dispatch({ type: "INC", payload: 1})
store.dispatch({ type: "INC", payload: 2})
store.dispatch({ type: "INC", payload: 22})
store.dispatch({ type: "INC", payload: 1})
store.dispatch({ type: "DEC", payload: 1000})

class MainPage extends React.Component {

	constructor(props) {
		super(props);
		this.getAsyncNodes = this.getAsyncNodes.bind(this);
	}

	/**
	 * Return the nodes to be displayed in the tree view. This function is initially called
	 * if the root property is not specified in the tree view
	 * @param  {object} parent The parent object linked to the node, or null if the tree needs
	 *                         	to display the root nodes
	 * @return {any}        The list of roots, or a promise object
	 */
	getNodes(parent) {
		const level = parent ? parent.level : 0;
		const pname = parent ? parent.name + '.' : 'Item ';

		const size = Math.floor(Math.random() * 5) + 2;

		const lst = [];
		for (var i = 1; i <= size; i++) {
			lst.push({ name: pname + i, level: level + 1 });
		}

		return lst;
	}


	getAsyncNodes(parent) {
		const self = this;
		return new Promise(resolve => {
			setTimeout(() => resolve(self.getNodes(parent)), 1000);
		});
	}

	/**
	 * The title to be displayed, or any other composition of react components
	 * @param  {object} item The object returned by getNodes()
	 * @return {any}         String to be displayed as a title or a react component
	 */
	innerNode(item) {
		return item.name;
	}

	/**
	 * React component that will wrap the node link. It will include 2 columns to be displayed
	 * using Twitter Bootstrap to make it responsive
	 * @param  {Component} content 	The react element containing the plus/leaf button and the title
	 * @param  {object} item    	The object linked to the node (returned by getNodes)
	 * @return {Component}         	A new component wrapping the given component
	 */
	outerNode(content, item) {
		return (
			<div key={item.name} className="row" style={{ borderTop: '1px solid #f0f0f0' }}>
				<div className="col-xs-6">
					{content}
				</div>
				<div className="col-xs-3">
					{'Column 1'}
				</div>
				<div className="col-xs-3">
					{'Column 2'}
				</div>
			</div>
			);
	}

	/**
	 * Inform the tree if the node is a leaf, i.e, if the node has no other children
	 * @param  {[type]} item The object linked to the node, created by the <code>getNodes</code> function
	 * @return {boolean}     return true if the node is a leaf
	 */
	checkLeaf(item) {
		if (item.level === 1) {
			return false;
		}

		const res = Math.floor(Math.random() * 2.2);
		return res === 1;
	}





	render() {


        const reducer = function(state,action) {
            if(action.type === "INC"){
                return state + action.payload;
            }
            if(action.type === "DEC"){
                return state - action.payload;
            }
            return state;
        };

		return (
			<div className="container">
				<h2>{'Simple Tree View'}</h2>
				<TreeView onGetNodes={this.getNodes}
					innerRender={this.innerNode}
					checkLeaf={this.checkLeaf} />

				<h2>{'Multiple columns (using Bootstrap grid system)'}</h2>
				<TreeView onGetNodes={this.getNodes}
					innerRender={this.innerNode}
					checkLeaf={this.checkLeaf}
					outerRender={this.outerNode} />

				<h2>{'Async loading'}</h2>
				<TreeView onGetNodes={this.getAsyncNodes}
					innerRender={this.innerNode}
					outerRender={this.outerNode}
					checkLeaf={this.checkLeaf} />
			</div>
			);
	}
}

// render the main page
ReactDOM.render(
    <Provider store={store}>
	<MainPage />
    </Provider>,
	document.getElementById('content'));
