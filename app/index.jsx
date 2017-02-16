import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './tree-view';
import { Provider } from 'react-redux';
import store from './redux/store';
// include babel modules
import 'babel-core/register';

// load font awesome
import 'font-awesome-webpack';


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


		return (
			<div className="container">
				<h2>{'Drzewko'}</h2>
				<TreeView onGetNodes={this.getNodes}
					innerRender={this.innerNode}
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
