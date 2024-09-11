import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './VetProfile.module.css'; // Importando o 
import funtest from './funtest.svg'

function VetProfile() {
  return (
    <div className={`${styles.container} container mt-4`}>
      {/* Header do perfil com foto e informações principais */}
<Card className="mb-4" style={{ width: '100%', height: '400px' }}>
  <img
    src={funtest}
    alt="Foto de Fundo"
    className={`${styles.profileImage1}`}
  />
  <Card.Body className="d-flex align-items-center justify-content-between">
    <div className="d-flex align-items-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Foto do Veterinário"
        className={`rounded-circle ${styles.profileImage}`}
      />
      <div className="ml-3">
        <h2>Milena da Silva Cardoso</h2>
        <div className="d-flex flex-wrap">
          <span className="badge badge-secondary mr-2">Clínica geral</span>
          <span className="badge badge-secondary mr-2">Cirurgia</span>
          <span className="badge badge-secondary">Especialista</span>
        </div>
        <div className="d-flex align-items-center mt-2">
          <i className="fas fa-map-marker-alt"></i>
          <span className="ml-2">Belo Horizonte, MG</span>
          <div className="ml-3">
            <span className="text-warning">&#9733; &#9733; &#9733; &#9734; &#9734;</span>
          </div>
        </div>
      </div>
    </div>
    <Button className="btn btn-primary">Fale com este profissional</Button>
  </Card.Body>
</Card>


      {/* Seção Informações do Profissional */}
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <h5>Informações do Profissional</h5>
            <Button variant="light">✏️</Button>
          </div>
          <p>Formas de Atendimento: Domiciliar, Clínica</p>
          <p>Sobre: Especialista em cuidados e tratamentos de gatos e cães.</p>
          <p>Serviços Prestados: Consultas, Cirurgias, Exames.</p>
        </Card.Body>
      </Card>

      {/* Seção Formação Acadêmica */}
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <h5>Formação Acadêmica</h5>
            <Button variant="light">✏️</Button>
          </div>
          <p>Graduação em Medicina Veterinária - Universidade de São Paulo (USP)</p>
          <p>Especialização em Dermatologia Veterinária - UNESP</p>
        </Card.Body>
      </Card>

      {/* Seção Experiência Profissional */}
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <h5>Experiência Profissional</h5>
            <Button variant="light">✏️</Button>
          </div>
          <p>Veterinária na Clínica PetCare - 5 anos</p>
          <p>Veterinária Domiciliar - 3 anos</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VetProfile;
