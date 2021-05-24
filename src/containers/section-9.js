import React from "react";
import { Container, Col, Form, FormGroup, Input, Button } from "reactstrap";
import "../assets/css/section-9.css";

export default () => (
  <section className="s9">
    <Container className="ref-pos">
      <h1>Contact us </h1>
      <Form>
        <FormGroup row className="m-0">
          <Col md="9" className="p-0">
            <Input
              type="email"
              placeholder="Email adress"
              className="s9__email"
            />
          </Col>
          <Col md="3" className="p-0">
            <Button className="s9__submit">
              <i class="fas fa-location-arrow" /> Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  </section>
);
