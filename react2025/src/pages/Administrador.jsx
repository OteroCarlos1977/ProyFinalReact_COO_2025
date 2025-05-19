// Administrador.jsx
import React from "react";
import { Container, Table, Spinner, Alert, Image } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import DataProductos from "../hooks/DataProductos";
import Button from "../componentes/Button";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importa los iconos de react-icons/fa

function Administrador() {
  const { usuario } = useAuth();
  const { data, loading, error } = DataProductos(
    "https://fakestoreapi.com/products"
  );

  const handleEditarProducto = (id) => {
    console.log(`Función de editar producto con ID: ${id}`);
    // Aquí va tu lógica para editar el producto con este ID
  };

  const handleEliminarProducto = (id) => {
    console.log(`Función de eliminar producto con ID: ${id}`);
    // Aquí va tu lógica para eliminar el producto con este ID
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">
            Cargando datos de productos...
          </span>
        </Spinner>
        <p>Cargando datos de productos para el administrador...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Error al cargar datos de productos: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      {usuario ? (
        <>
          <div className="text-center mb-4">
            <h2>Panel de Administración de Productos</h2>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Imagen</th>
                  <th>Valoracion</th>
                  <th>Cantidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>
                      <td>{producto.title}</td>
                      <td>${producto.price}</td>
                      <td
                        style={{
                          maxWidth: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {producto.description}
                      </td>
                      <td>{producto.category}</td>
                      <td>
                        <Image
                          src={producto.image}
                          alt={producto.title}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
                          }}
                        />
                      </td>
                      <td>{producto.rating.rate}</td>
                      <td>{producto.rating.count}</td>
                      <td>
                        <Button
                          Icono={FaEdit}
                          variant="success"
                          onClick={() => handleEditarProducto(producto.id)}
                          className="rounded-20"
                          style={{
                            padding: "0.0rem",
                            marginRight: "0.2rem",
                            width: "30px",
                            height: "30px",
                          }} // Aumenté el padding y agregué margin-right
                          tooltip="Editar"
                        />
                        <Button
                          Icono={FaTrash}
                          variant="danger"
                          onClick={() => handleEliminarProducto(producto.id)}
                          className="rounded-15"
                          style={{
                            padding: "0.0rem",
                            width: "30px",
                            height: "30px",
                          }} // Aumenté el padding
                          tooltip="Eliminar"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p>Cargando información del administrador...</p>
          {/* O podrías mostrar un mensaje de "No autorizado" si el usuario no está autenticado */}
        </div>
      )}
    </Container>
  );
}

export default Administrador;
