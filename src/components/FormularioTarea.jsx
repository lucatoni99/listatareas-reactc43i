import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar tarea en nuestro array lista Tareas
    setListaTareas([...listaTareas, tarea]);
    //limpiar el imput
    setTarea("");
  };
  //crear una funcion para borrar las tareas
  const borrarTarea = (tareaBorrar) => {
    let listaTareaFiltrada = listaTareas.filter(
      (itemTarea) => itemTarea !== tareaBorrar
    );
    setListaTareas(listaTareaFiltrada);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        propslistaTareas={listaTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </>
  );
};

export default FormularioTarea;
