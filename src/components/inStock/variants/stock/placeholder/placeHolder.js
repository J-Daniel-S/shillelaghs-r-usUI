import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import PlaceHolderCard from "../placeholder/placeHolderCard.js";

const PlaceHolder = (props) => {
  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol>
          <PlaceHolderCard />
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default PlaceHolder;
