import React, { useEffect, useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory }  from 'react-router-dom';

import ShillelaghContext from '../context/ShillelaghContext';

const AdminNavbar = (props) => {
	 // eslint-disable-next-line
	const [shillelaghs, setShillelaghs, customer, setCustomer, cartOpen, setCartOpen, cartContents, setCartContents,
		 // eslint-disable-next-line
		 confirm, setConfirm, order, setOrder, price, setPrice, deleteConfirm, setDeleteConfirm, paymentMethod, setPaymentMethod, address, setAddress, admin, setAdmin] = useContext(ShillelaghContext);
	const history = useHistory();

	useEffect(() => admin ? console.log(''): history.push('/shillelaghs-r-us/home'));
	
	const goToCustomers = () => {
		history.push('/admin/customers');
	}

	const goToStock = () => {
		history.push('/admin/stock');
	}

	const logout = () => {
		setAdmin(null);
		setCustomer(null);
		history.push('/shillelaghs-r-us/home');
	}

	return(
		<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					Shillelaghs r us admin page
					</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link onClick={goToCustomers}>Customers page</Nav.Link>
					<Nav.Link onClick={goToStock}>Stock page</Nav.Link>
					<Nav.Link onClick={logout}>Logout</Nav.Link>
				</Nav>
			</Navbar>
	);
}

export default AdminNavbar;