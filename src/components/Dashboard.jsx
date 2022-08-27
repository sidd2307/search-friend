import React, { useState } from "react";
import { Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import NavBar2 from "./NavBar2";

import { datas } from "../UserLists";
import {
  Add,
  ArrowBack,
  ArrowForward,
  Home,
  Pencil,
  People,
  Search,
  SearchCircle,
  SearchCircleOutline,
} from "react-ionicons";
import { Link } from "react-router-dom";
import Friend from "./Friend";

export default function Dashboard() {
  const [data, setData] = useState(datas);
  const [open, setopen] = useState(true);

  const searchItems = (name) => {
    let newData = [...datas];
    let newData2 = newData.filter((q) => q.name === name);
    setData(newData2);
  };

  const deleteFriend = (id) => {
    let newData = [...datas];
    let newData2 = newData.filter((q) => q.id !== id);
    setData(newData2);
  };

  return (
    <>
      <NavBar2 />
      <Button onClick={() => setopen(!open)}>
        <h1>S</h1>
      </Button>
      {open ? <ArrowBack /> : <ArrowForward />}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={open ? 3 : 1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  {open ? (
                    <>
                      <Home color={"white"} />
                      Home
                    </>
                  ) : (
                    <>
                      <Home color={"white"} />
                    </>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  {open ? (
                    <>
                      <Search color={"white"} />
                      Search
                    </>
                  ) : (
                    <>
                      <Search color={"white"} />
                    </>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  {open ? (
                    <>
                      <People color={"white"} />
                      Friends
                    </>
                  ) : (
                    <>
                      <People color={"white"} />
                    </>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">
                  {open ? (
                    <>
                      <Add color={"white"} />
                      Friend Request
                    </>
                  ) : (
                    <>
                      <Add color={"white"} />
                    </>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">
                  {open ? (
                    <>
                      <Pencil color={"white"} />
                      Edit Profile
                    </>
                  ) : (
                    <>
                      <Pencil color={"white"} />
                    </>
                  )}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="" style={{ justifyContent: "center" }}>
                  <h1>React Social Connector</h1>
                  <h5>A place for connecting people</h5>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h1>Search your Friends</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <Form
                    style={{
                      width: 300,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Search here
                      </Form.Label>
                      <Form.Control
                        onChange={(e) => searchItems(e.target.value)}
                        type="text"
                        placeholder="Enter name"
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        width: 100,
                        marginLeft: 0,
                        height: 40,
                        marginTop: 15,
                        marginLeft: 5,
                      }}
                    >
                      Search
                    </Button>
                  </Form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {data.map((item, index) => {
                      return (
                        <Friend
                          image={item.imgSrc}
                          name={item.name}
                          doj={item.doj}
                          desc={item.description}
                          friends={item.friends}
                          key={item.id}
                          id={item.id}
                          deleteFriend={() => deleteFriend(item.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div className="" style={{ justifyContent: "center" }}>
                  <h1>Friend Request</h1>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <div className="" style={{ justifyContent: "center" }}>
                  <h1>Edit Profile</h1>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}
