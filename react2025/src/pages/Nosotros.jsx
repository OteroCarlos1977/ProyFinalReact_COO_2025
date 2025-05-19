import React from "react";
import { Container } from "react-bootstrap";

const Nosotros = () => {
  return (
    <Container className="mt-4">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Somos TU HOGAR
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Bienvenido a <strong>Tu Hogar</strong>, un e-commerce que está dando
          sus primeros pasos con pasión y entusiasmo. Nos dedicamos a ofrecer lo
          mejor en <strong>ropa</strong>, <strong>tecnología</strong> y{" "}
          <strong>bijouterie</strong>, siempre pensando en la calidad, el estilo y el
          bienestar de nuestros clientes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Ropa */}
          <div className="text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Necp1CkhTRSyq08079-x1VlAf4dQCkqcvw&s"
              alt="Ropa"
              className="rounded-2xl shadow-lg mb-4 w-full h-60 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Moda para todos
            </h2>
            <p className="text-gray-600 text-sm">
              Prendas cómodas, modernas y accesibles para que cada día sea una
              pasarela.
            </p>
          </div>

          {/* Tecnología */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
              alt="Tecnología"
              className="rounded-2xl shadow-lg mb-4 w-full h-60 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Tecnología actual
            </h2>
            <p className="text-gray-600 text-sm">
              Gadgets, smartphones y accesorios para mantenerte siempre
              conectado.
            </p>
          </div>

          {/* Joyas */}
          <div className="text-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="Joyas"
              className="rounded-2xl shadow-lg mb-4 w-full h-60 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Joyas con estilo
            </h2>
            <p className="text-gray-600 text-sm">
              Diseños únicos que reflejan elegancia y personalidad.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            En <strong>Tu Hogar</strong> soñamos con acompañarte en tu día a
            día, ofreciéndote productos de calidad que reflejen quién eres.
            ¡Gracias por ser parte de este comienzo!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Nosotros;
