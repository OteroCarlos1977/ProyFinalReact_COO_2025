// Componente para proteger rutas según el rol del usuario

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { usuario, esAdministrador } = useAuth();

    // Verifica si el usuario está autenticado
    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    // Verifica si es una ruta solo para administradores
    if (adminOnly && !esAdministrador()) {
        return <Navigate to="/" replace />;
    }

    // Si pasa todas las verificaciones, renderiza el componente protegido
    return children;
};

export default ProtectedRoute;