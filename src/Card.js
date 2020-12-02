import React from 'react';
import './Card.css';

const Card = ({ title, image, price, formula, company }) => {
	return (
		
		<div className="col-12 col-sm-6 col-md-4 col-xl-3 my-3">
			<div className="card text-center">
				<img
					className="productImg img-thumbnail rounded mx-auto d-block"
					src={image}
					alt={title}
				/>
				<div className="card-body">
					<h5 className="card-title productName">{title}</h5>
					<div className="text-center mb-1">
						<b className="card-text d-block">{price}</b>
					</div>
					<div className="text-left">
						<b>Mfr. </b> <span style={{color: 'blue'}}>{company}</span>
					</div>
					<div className="text-left">
						<b>formula. </b> {formula}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;