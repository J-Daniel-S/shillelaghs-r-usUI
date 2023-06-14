import React from 'react';
import { MDBContainer } from 'mdbreact';

import Stock from './stock/Stock';

const NotCart = (props) => {

	return (
		<MDBContainer>
			<Stock addToCart={props.addToCart} stock={props.stock} />
		</MDBContainer>
	);
}

export default NotCart;