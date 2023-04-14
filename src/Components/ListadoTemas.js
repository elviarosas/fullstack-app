import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ListadoTemas() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/temas")
      .then((res) => res.json())
      .then((data_json) => setData(data_json));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link to="/addTema" className="btn btn-primary">
              Add Tema
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover table-responsive size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Tema</th>
                  <th>Descripcion</th>
                  <th>Imagen</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        <img src={item.url}></img>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
