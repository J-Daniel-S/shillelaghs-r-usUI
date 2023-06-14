import React, { useContext, useState, useEffect } from 'react';
import { MDBInput, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { Button } from 'react-bootstrap';
import { useHistory }  from 'react-router-dom';

import ShillelaghContext from '../../../context/ShillelaghContext';

const ForgotPassword = (props) => {
	// eslint-disable-next-line
	const [shillelaghs, setShillelaghs, customer, setCustomer] = useContext(ShillelaghContext);
	const [username, setUsername] = useState();
	const history = useHistory();

	useEffect(() => {
		document.getElementById('focus').focus();
	}, []);

	const changed = input => event => {
		setUsername(event.target.value);
	}

	const submitted = (event) => {
		event.preventDefault();
		alert('You will receive and email to help you reset your password shortly');
		history.push("/shillelaghs-r-us/sign-in");
	}

	return (
		<MDBCard>
			<MDBCardBody>
				<form onSubmit={submitted}>
					<p className="h4 text-center py-4">Forgot password</p>
					<div className="grey-text">
						<MDBIcon icon="user" />
						<MDBInput
							label="Your username"
							group
							type="text"
							validate
							error="wrong"
							success="right"
							value={username}
							onChange={changed("username")}
							required
							id="focus"
						/>
					</div>
					<div className="text-center py-4 mt-3">
						<Button variant="brown" type="submit">
							Submit
                 						</Button>
					</div>
				</form>
			</MDBCardBody>
		</MDBCard>
	);
}

export default ForgotPassword;