import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propslistaTareas }) => {
  return (
    <ListGroup>
      {propslistaTareas.map((tarea, index) => (
        <ItemTarea key={index} nombreTarea={tarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
