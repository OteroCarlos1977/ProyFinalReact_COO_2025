import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "./Button";
import useFetchProductById from "../hooks/DataProductoDetalle";

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useFetchProductById(
    "https://fakestoreapi.com/products", id );

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No se encontró el producto</p>;

  return (
    <Container className="m-4">
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
      />
      <p>
        <strong>Precio:</strong> ${product.price}
      </p>
      <p>
        <strong>Categoría:</strong> {product.category}
      </p>
      <p>
        <strong>Descripción:</strong> {product.description}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating?.rate} / 5 (
        {product.rating?.count} reseñas)
      </p>

      <Button
        className="mt-2 align-self-center w-20"
        texto="Volver"
        onClick={() => navigate("/")}
        tooltip="Volver Página Principal"
        variant="primary"
      />
    </Container>
  );
}

export default DetalleProducto;
