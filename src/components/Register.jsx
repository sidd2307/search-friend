import React from "react";
import { Button, Form } from "react-bootstrap";
import NavBar from "./NavBar";

export default function Register() {
  return (
    <>
      <NavBar />
      <Form style={{ width: 300, marginTop: 200, marginLeft: 600 }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>
            Confirm Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          style={{ width: 300, marginLeft: 0 }}
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
}
