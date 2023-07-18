import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
} from "mdbreact";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Article } from "./styles/Styles";

const Contact = (props) => {
	//not used but required for validation
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();

  const sent = (event) => {
	event.preventDefault();
    alert("Message sent!");
    history.push("/shillelaghs-r-us/home");
  };

  const changed = input => event => {
	switch (input) {
		case "name":
			setName(event.target.value);
			break;
		case "email":
			setEmail(event.target.value);
			break;
		case "message":
			setMessage(event.target.value);
			break;
		case "subject":
			setSubject(event.target.value);
			break;
		default:
			break;
	}
}

  return (
    <Article>
      <MDBContainer>
        <MDBCard>
          <MDBCardHeader>
            <p className="h5 text-center mb-4">Write to us</p>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBRow>
              <MDBCol>
                <form onSubmit={sent}>
                  <section className="grey-text">
                    <MDBIcon icon="user" />
                    <MDBInput
                      label="Your name"
                      group
                      type="text"
					  required
                      validate
                      error="wrong"
                      success="right"
					  value={name}
					  onChange={changed("name")}
                    />
                    <MDBIcon icon="envelope" />
                    <MDBInput
                      label="Your email"
                      group
                      type="email"
					  required
                      validate
                      error="wrong"
                      success="right"
					  value={email}
					  onChange={changed("email")}
                    />
                    <MDBIcon icon="tag" />
                    <MDBInput
                      label="Subject"
                      group
                      type="text"
                      validate
					  required
                      error="wrong"
                      success="right"
					  value={subject}
					  onChange={changed("subject")}
                    />
                    <MDBIcon icon="pencil-alt" />
                    <MDBInput type="textarea" rows="2" required label="Your message" value={message} onChange={changed("message")} />
                  </section>
                  <section className="text-center">
                    <Button variant="brown" type="submit">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </Button>
                  </section>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </Article>
  );
};

export default Contact;
