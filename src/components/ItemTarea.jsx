import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      ejemplo de tarea
      <Button variant="danger">borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
