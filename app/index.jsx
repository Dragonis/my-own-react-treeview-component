import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TreeView from './tree-view';
import { Provider } from 'react-redux';
import store from './redux/store';
// include babel modules
import 'babel-core/register';

// load font awesome
import 'font-awesome-webpack';
import {observable} from "mobx"
import {observer} from "mobx-react"
import { setDescription, setValue, setAmount, setMultipier, setTotal, addTreeviewLeaf } from './redux/actions';

@observer class MainPage extends React.Component {

    @observable drzewo = [];

	constructor(props) {
		super(props);
		this.dodajDrzewo = this.dodajDrzewo.bind(this);
		this.getNodes= this.getNodes.bind(this);
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

		/*const size = Math.floor(Math.random() * 5) + 2;*/
		// co ile dzieci na tworzyc rodzic, gdy rozwinie sie drzewo/podrzewo rodzica
		const size = 1;

		const lst = [];
		for (var i = 1; i <= size; i++) {
			lst.push({ name: pname + i, level: level + 1 });
		}
		//console.log("drzewko: " + lst[0].name)
		this.drzewo = lst;
		return lst;
	}




	/**
	 * The title to be displayed, or any other composition of react components
	 * @param  {object} item The object returned by getNodes()
	 * @return {any}         String to be displayed as a title or a react component
	 */
	innerNode(item) {
		return item.name;
	}


	dodajDrzewo(){
		//alert('a')

        console.log( "Rodzic1: " + this.drzewo[0].name )
		this.drzewo.push( {name: "Wojtek2", level: 1} )
		this.drzewo.push( {name: "Wojtek3", level: 2} )
        console.log( "Rodzic2: " + this.drzewo[1].name )
        console.log( "Rodzic3: " + this.drzewo[2].name )



        this.forceUpdate()
		return this.drzewo
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
				<button onClick={  this.dodajDrzewo } > Dodaj drzewo </button>

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
