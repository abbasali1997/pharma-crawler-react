import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import axios from 'axios';

const API = '/api';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(search) {
		axios
			.get(API, {
				params: {
					search: search,
				},
			})
			.then((res) => res.data)
			.then((products) => {
				Promise.all(products).then((values) => this.setState({products: values}));
				
			})
			.catch((error) => {
				if (error.response) {
					// Request made and server responded
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
			});
	}

	render() {
		const list = (!this.state.products || !this.state.products.length) ? null : (<ProductList products={this.state.products} />);
		return (
			<div className="App">
				<h1 className="text-center my-5">Pharma Crawler</h1>
				<SearchBar onSave={this.handleSearch} />
				{list}
			</div>
		);
	}
}

export default App;