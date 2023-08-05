import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button variant="danger" onClick={() => borrarTarea(nombreTarea)}>
        borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
