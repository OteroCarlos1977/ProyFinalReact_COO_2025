// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CarritoProvider } from "./context/CarritoContext";
import { CategoryFilterProvider } from './context/CategoryFilterContext'; // Importar el Provider
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Administrador from "./pages/Administrador";
import Carrito from "./componentes/Carrito";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
    return (
        <Router>
            <AuthProvider>
                <CarritoProvider>
                    <CategoryFilterProvider>  {/* Envolver la app con el Provider */}
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/nosotros" element={<Nosotros />} />
                            <Route path="/contacto" element={<Contacto />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/carrito" element={<Carrito />} />
                            <Route
                                path="/administrador"
                                element={
                                    <ProtectedRoute adminOnly={true}>
                                        <Administrador />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                        <Footer />
                    </CategoryFilterProvider>
                </CarritoProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
