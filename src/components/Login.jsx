import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Login() {
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
        <Link to={"/dashboard"}>
          <Button
            variant="primary"
            type="submit"
            style={{ width: 300, marginLeft: 0 }}
          >
            Login
          </Button>
        </Link>
      </Form>
    </>
  );
}
