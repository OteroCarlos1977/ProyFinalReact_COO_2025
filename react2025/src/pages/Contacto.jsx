import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Aquí podrías enviar los datos a una API o email service
      console.log('Mensaje enviado:', formData);

      Swal.fire({
        title: 'Mensaje enviado',
        text: 'Tu mensaje ha sido enviado. Pronto nos pondremos en contacto contigo.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      setFormData({ nombre: '', email: '', mensaje: '' });
    }

    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Contacto</h2>

      <Row>
        <Col md={6}>
          <h5>Datos de la empresa</h5>
          <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
          <p><strong>Email:</strong> contacto@miempresa.com</p>
          <p><strong>Dirección:</strong> Av. Siempre Viva 742, Buenos Aires</p>

          {/* Mapa integrado de Google Maps */}
          <div className="mt-3">
            <iframe
              title="Mapa de la empresa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7437305120625!2d-58.43590122426016!3d-34.61021705767839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb631e15db2b%3A0xe5055412c65910cc!2sAv.%20Siempre%20Viva%20742%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1715281371402!5m2!1ses-419!2sar"
              width="75%"
              height="250"
              style={{ border: '3px solid #ccc' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>

        <Col md={6} style={{ background: 'rgba(0,0,0,0.3)' }}>
            <h5 style={{ padding:'5px'}}>Envianos tu mensajes</h5>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                style={{ padding:'5px', border: '2px solid #ccc' }}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu nombre.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tuemail@ejemplo.com"
                style={{ border: '2px solid #ccc' }}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un email válido.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="mensaje" className="mt-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                placeholder="Escribe tu mensaje"
                style={{ border: '2px solid #ccc' }}
              />
              <Form.Control.Feedback type="invalid">
                El mensaje no puede estar vacío.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4" style={{ marginBottom: '20px' }}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
