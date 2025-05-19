import React, { useState } from "react";
import { Container, Form, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth } from "../context/AuthContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "../componentes/Button";

const MySwal = withReactContent(Swal);

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await login(usuario, password);

        if (result.success) {
            MySwal.fire({
                title: `Bienvenido, ${result.user.nombre}`,
                icon: "success",
                confirmButtonText: "Continuar",
            });
        } else {
            MySwal.fire({
                title: "Error",
                text: result.message,
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <Card.Title className="mb-4 text-center">Iniciar Sesión</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsuario" className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Ingrese su contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={togglePasswordVisibility}
                                    texto="" // Cadena vacía para no mostrar texto en el botón
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </Button>
                            </div>
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                            texto="Acceder"
                        />
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;