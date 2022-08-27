import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Friend(props) {
  return (
    <Card
      style={{
        width: "18rem",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
      }}
    >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text style={{ color: "gray" }}>
          {props.name} joined in {props.doj}
        </Card.Text>
        <Card.Text style={{ color: "black" }}>{props.desc}</Card.Text>
        <Card.Text style={{ color: "black" }}>{props.friends}</Card.Text>
        <Button variant="danger">Remove Friend</Button>
      </Card.Body>
    </Card>
  );
}
