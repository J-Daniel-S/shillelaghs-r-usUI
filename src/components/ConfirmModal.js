import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory }  from 'react-router-dom';

import ShillelaghContext from '../context/ShillelaghContext';

const ConfirmModal = (props) => {
	const history = useHistory();
	// eslint-disable-next-line
	const [ shillelaghs, setShillelaghs, customer, setCustomer, cartOpen, setCartOpen, cartContents, setCartContents,  confirm, setConfirm, order, setOrder, price, setPrice, deleteConfirm, 
			// eslint-disable-next-line
		setDeleteConfirm, paymentMethod, setPaymentMethod, address, setAddress, admin, setAdmin ] = useContext(ShillelaghContext);

	const confirmed = () => {
		props.refresh(true);
		setConfirm(false);
		setCartOpen(false);
		setPaymentMethod(null);
		props.order();
		setTimeout(() => history.push('/shillelaghs-r-us/account'), 1500);
		console.log('useReactRouter');
	}

	return (
		<Modal show={confirm} onHide={() => setConfirm(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Confirm order</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Does your order look right?</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="grey" onClick={() => setConfirm(false)}>Close</Button>
				<Button variant="brown" onClick={() => confirmed()}>Confirm checkout</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ConfirmModal;