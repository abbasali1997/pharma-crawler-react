import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ProductList extends Component {
	static propTypes = {
        products: PropTypes.arrayOf(PropTypes.object).isRequired
    }
	render() {
		const products = this.props.products.map( (prod) => (
			<Card key={prod._id} {...prod} />
		))
		return (
			<div className="container-fluid mt-5">
				<div id="productsContainer" className="row">
					{products}
				</div>
			</div>
		)	
	}
}

export default ProductList;
