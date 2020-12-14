import React from 'react';
import './Card.css';

const Card = ({ title, image, price, formula, company, site, type }) => {
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
					<div className="text-center my-2">
						<b className="card-text d-block" style={{color: 'deeppink'}}>{price}</b>
					</div>
					<div className="text-start">
						<b>Type. </b> {type}
					</div>
					<div className="text-start">
						<b>Mfr. </b> {company}
					</div>
					<div className="text-start">
						<b>formula. </b> {formula}
					</div>
					<div className="text-start">
						<b>Site. </b> <a href={site}>{site}</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
