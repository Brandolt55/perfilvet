import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function VetProfileForm() {
  const [formData, setFormData] = useState({
    academic: '',
    experience: '',
    professionalInfo: '',
    about: '',
    certificates: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCertificatesChange = (e, index) => {
    const file = e.target.files[0];
    const updatedCertificates = [...formData.certificates];
    updatedCertificates[index] = file;
    setFormData({
      ...formData,
      certificates: updatedCertificates,
    });
  };

  const addCertificateField = () => {
    setFormData({
      ...formData,
      certificates: [...formData.certificates, null],
    });
  };

  const removeCertificate = (index) => {
    const updatedCertificates = formData.certificates.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      certificates: updatedCertificates,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados ao backend ou processar o formulário
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Informações do Profissional</Card.Title>
            <Form.Group controlId="professionalInfo">
              <Form.Label>Formas de Atendimento e Serviços Prestados</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="professionalInfo"
                value={formData.professionalInfo}
                onChange={handleChange}
                placeholder="Descreva as formas de atendimento e os serviços prestados..."
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Formação Acadêmica</Card.Title>
            <Form.Group controlId="academic">
              <Form.Label>Detalhes da Formação Acadêmica</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="academic"
                value={formData.academic}
                onChange={handleChange}
                placeholder="Descreva sua formação acadêmica..."
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Experiência Profissional</Card.Title>
            <Form.Group controlId="experience">
              <Form.Label>Detalhes da Experiência Profissional</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Descreva sua experiência profissional..."
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Sobre</Card.Title>
            <Form.Group controlId="about">
              <Form.Label>Sobre o Veterinário</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Fale um pouco sobre você..."
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Adicionar Certificados</Card.Title>
            {formData.certificates.map((certificate, index) => (
              <div key={index} className="mb-3">
                <Form.Group controlId={`formCertificate${index}`}>
                  <Form.Control
                    type="file"
                    name="certificates"
                    onChange={(e) => handleCertificatesChange(e, index)}
                    accept="image/*,.pdf"
                  />
                </Form.Group>
                {certificate && (
                  <div className="d-flex align-items-center">
                    {certificate.type === 'application/pdf' ? (
                      <embed
                        src={URL.createObjectURL(certificate)}
                        type="application/pdf"
                        width="150px"
                        height="150px"
                        style={{ marginRight: '10px', marginTop: '10px', border: '1px solid #ddd' }}
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(certificate)}
                        alt={`Certificado ${index + 1}`}
                        className="img-thumbnail"
                        style={{ width: '150px', marginRight: '10px', marginTop: '10px' }}
                      />
                    )}
                    <Button variant="danger" onClick={() => removeCertificate(index)}>
                      Excluir
                    </Button>
                  </div>
                )}
              </div>
            ))}
            <Button
              variant="secondary"
              type="button"
              onClick={addCertificateField}
              className="mb-3"
            >
              Adicionar mais um certificado
            </Button>
          </Card.Body>
        </Card>

        <Button variant="primary" type="submit">
          Salvar Informações
        </Button>
      </Form>
    </div>
  );
}

export default VetProfileForm;
