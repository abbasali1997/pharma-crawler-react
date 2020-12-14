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
			load: false
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(search) {
		this.setState({ load: true });
		axios
			.get(API, {
				params: {
					search: search,
				},
			})
			.then((res) => res.data)
			.then((products) => {
				Promise.all(products).then((values) => this.setState({ products: values, load: false }));

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
		let list = null;
		const { products } = this.state;
		if (products && products.length > 0) {
			list = <ProductList products={products} />;
		}
		return (
			<div className="App d-flex flex-column justify-content-center" style={{ minHeight: '100vh' }}>
				<div className="my-5">
					<div className="text-center"><img id="spider" alt="spider" src="https://cdn1.iconfinder.com/data/icons/web-development-and-programming/64/programming_development_web_crawler-512.png"></img></div>
					<h1 className="text-center">Pharma Crawler</h1>
					<SearchBar onSave={this.handleSearch} load={this.state.load} />
				</div>
				{list}
			</div>
		);
	}
}

export default App;
