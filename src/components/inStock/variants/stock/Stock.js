import React from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact';
import { Button, CardColumns } from 'react-bootstrap';

const Stock = (props) => {

	//gets a picture to simulate the picture of an actual product
	const getUrl = (index) => {

		if (index % 6 === 0) {
			return 'https://i.pinimg.com/736x/80/e9/95/80e995f635f737ecb8c95719f6fd29c7.jpg';
		} else if (index % 5 === 0) {
			return 'https://www.gad.net/Blog/wp-content/uploads/2016/08/GenericShillelaghStick-300x200.jpg';
		} else if (index % 4 === 0) {
			return 'https://i.ebayimg.com/images/g/PbwAAOSwRmNc9k8I/s-l300.jpg';
		} else if (index % 3 === 0) {
			return 'https://cdn.shoplightspeed.com/shops/643161/files/30650712/traditional-irish-gifts-medium-irish-shillelagh.jpg';
		} else if (index % 2 === 0) {
			return 'https://preview.redd.it/would-love-to-see-a-shillelagh-introduced-as-a-ranged-blunt-v0-olilnkwyly9a1.jpg?auto=webp&s=915e5c8315bbcf90d25538dd47a1b62687ac3374';
		} else {
			return 'https://images-na.ssl-images-amazon.com/images/I/31egCOj6yUL.jpg';
		}

	}
	
	return (
		<CardColumns>
			{props.stock && props.stock[0] !== 'Loading...' && props.stock.map(s => (
				<MDBCard key={s.shillelaghId}>
					<MDBCardBody>
						<MDBRow>
							<MDBCol size="6">
								{s.name}
							</MDBCol>
							<MDBCol size="3">
								${s.price}
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol size="4">
							</MDBCol>
							<MDBCol>
								<Button variant="brown" onClick={() => props.addToCart(s)} >Add to cart</Button>
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
					<img className="card-img-bottom" src={getUrl(s.shillelaghId)} alt="the shillelagh" />
				</MDBCard>
			))}
		</CardColumns>
	);
}

export default Stock;