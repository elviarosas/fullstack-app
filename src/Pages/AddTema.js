import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTema() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagen, setImagen] = useState("");
  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");
  const [respPost, setRespPost] = useState("");

  const postTema = () => {
    const url = `http://localhost:3000/temas/add`;
    const data = {
      title: `${title}`,
      description: `${description}`,
      imagen: `${imagen}`,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((respPost) => {
        setRespPost(respPost);
        console.log(respPost);
        alert(`Alta de Tema exitosa`);
        setExito(true);
        navigate("/admin");
      })
      .catch((err) => {
        setError(err);
        setExito(false);
      });
  };

  return (
    <div>
      <Container size="sm">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Tema</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripcion"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="imagen">
                <Form.Label>URL Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Url imagen"
                  onChange={(e) => setImagen(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  postTema();
                }}
              >
                Guardar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
