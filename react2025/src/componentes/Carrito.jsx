
import { useNavigate } from 'react-router-dom'; // Hook para redireccionar entre rutas
import { Container, ListGroup, Alert, Row, Col, Image } from 'react-bootstrap'; // Componentes de Bootstrap para maquetado
import Button from "./Button"; // Botón personalizado
import { FaTrash } from "react-icons/fa"; // Icono de basurero
import Swal from 'sweetalert2'; // Librería para mostrar alertas modernas
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import { useCarrito } from '../context/CarritoContext'; // Hook personalizado del contexto del carrito

function Carrito() {
    const navigate = useNavigate(); // Permite redireccionar al usuario
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito(); // Accede al estado y funciones del carrito desde el contexto

    // Calcula el total de la compra sumando subtotales de cada producto
    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
    };

    // Muestra una alerta de confirmación antes de eliminar un producto del carrito
    const confirmarEliminacion = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas eliminar este producto del carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarDelCarrito(id); // Elimina el producto si el usuario confirma
                Swal.fire('Eliminado', 'El producto fue eliminado del carrito.', 'success');
            }
        });
    };

    // Finaliza la compra, vacía el carrito y redirige a la tienda
    const finalizarCompra = () => {
        Swal.fire({
            title: 'Compra completada',
            text: 'Tu compra ha sido procesada. Pronto recibirás información de la entrega.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        }).then(() => {
            vaciarCarrito(); // Limpia el carrito después de la compra
            navigate('/'); // Redirige al inicio o página principal
        });
    };

    // Renderiza un mensaje si el carrito está vacío
    if (!carrito || carrito.length === 0) {
        return (
            <Container className="mt-4 text-center">
                <h2>Carrito de Compras</h2>
                <Alert variant="info" className="mt-3">Tu carrito está vacío.</Alert>
                <Button variant="primary" className="mt-3" onClick={() => navigate('/')} texto="Volver a la Tienda" />
            </Container>
        );
    }

    // Renderiza el contenido del carrito si hay productos
    return (
        <Container className="mt-4">
            <h2>Carrito de Compras</h2>
            <ListGroup className="mb-3">
                {carrito.map(item => (
                    <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center flex-wrap">
                        <Row className="w-100 align-items-center">
                            {/* Imagen del producto */}
                            <Col xs={2} md={1} className="text-center p-1">
                                <Image src={item.image} alt={item.title} fluid thumbnail style={{ maxHeight: '50px' }} />
                            </Col>
                            {/* Título del producto */}
                            <Col xs={10} md={2}>
                                <small>{item.title}</small>
                            </Col>
                            {/* Precio unitario */}
                            <Col xs={10} md={2}>
                                <small>Precio {item.price}</small>
                            </Col>
                            {/* Cantidad seleccionada */}
                            <Col xs={6} md={2} className="text-md-end mt-2 mt-md-0">
                                <span>Cant: {item.cantidad}</span><br />
                            </Col>
                            {/* Subtotal del producto */}
                            <Col xs={6} md={2} className="text-md-end mt-2 mt-md-0">
                                <span>Subtotal ${(item.price * item.cantidad).toFixed(2)}</span>
                            </Col>
                            {/* Botón para eliminar el producto */}
                            <Col xs={6} md={2} className="text-end mt-2 mt-md-0">
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => confirmarEliminacion(item.id)}
                                    Icono={FaTrash}
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/* Total general del carrito */}
            <div className="mt-3 d-flex justify-content-end align-items-center">
                <h4>Total: ${calcularTotal()}</h4>
            </div>

            {/* Botones de acción: seguir comprando o finalizar */}
            <div className="mt-3 d-flex justify-content-between flex-wrap">
                <Button variant="primary" onClick={() => navigate('/')} className="mb-2" texto="Seguir Comprando" />
                <Button variant="success" className="mb-2" onClick={finalizarCompra} texto="Finalizar Compra" />
            </div>
        </Container>
    );
}

export default Carrito;
