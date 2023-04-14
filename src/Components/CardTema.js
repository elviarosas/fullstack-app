import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardTema(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.datos.imagen} />
        <Card.Body>
          <Card.Title>{props.datos.title}</Card.Title>
          <Card.Text>{props.datos.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardTema;
