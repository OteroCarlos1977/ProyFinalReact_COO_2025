import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usuarios from "../data/usuarios"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    

    const login = (username, password) => {
        const user = usuarios.find(u => u.usuario === username && u.password === password);

        if (user) {
            setUsuario(user);
            localStorage.setItem("usuario", JSON.stringify(user));
            navigate(user.rol === "admin" ? "/administrador" : "/"); // Redirige después del login
            return { success: true, user }; // Devuelve el usuario
        }
        return { success: false, message: "Credenciales inválidas" };
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuario");
        navigate('/login');
    };

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem("usuario");
        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado));
        }
    }, []);

    const esAdministrador = () => usuario?.rol === "admin";

    return (
        <AuthContext.Provider value={{ usuario, login, logout, esAdministrador }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);