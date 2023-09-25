import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import './Registrar.css';



const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNamelChange = (e) => {
    setName(e.target.value);
  };

  const handlelastNameChange = (e) => {
    setlastName(e.target.value);
  }; 

 const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/^\d{10}$/); // Filtrar caracteres no numéricos /^\d{10}$/
      setPhoneNumber(numbersOnly);
    };
  
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de registro, como enviar una solicitud a un servidor o guardar los datos de registro
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };



  return (
    <div className="container">  
    handleShowModal=true;
         
     {/*} <Button variant="primary" onClick={handleShowModal}>
        Registrarse
  </Button>*/}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group">
                    <label>Nombres:</label>
                    <input type="text" className="form-control" value={name} onChange={handleNamelChange} />
                </div>
                <div className="form-group">
                    <label>Apellido/s:</label>
                    <input type="text" className="form-control" value={lastName} onChange={handlelastNameChange} />
                </div>
                <div className="form-group">
                    <label>Direccion:</label>
                    <input type="text" className="form-control" value={address} onChange={handleAddressChange} />           
                </div>
                <div className="form-group">
                    <label>Telefono:</label>
                    <input type="text" className="form-control" value={phoneNumber} onChange={handlePhoneChange} />           
                </div>            
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form-group">
                    <label>Confirmar contraseña:</label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>            
            </form>   
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;