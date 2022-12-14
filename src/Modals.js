import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { requestHTTPNewUser, requestHTTPNewProduct } from './requests';

function ModalWrongUser({ show, setShow }) {

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>Warning:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your username and password are invalid, please try again.
        </Modal.Body>
      </Modal>
    </>
  );
}

function ModalCreateUser() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dataUser, setdataUser] = useState({ email: "", password: "", role: "" });

  const handleChange = ({ target }) => {
    setdataUser({
      ...dataUser,
      [target.name]: target.value
    })
  }
  const tokenAccess = localStorage.getItem('loginToken');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseRequestNewUser = await requestHTTPNewUser(dataUser, tokenAccess)
    console.log(responseRequestNewUser)
    setShow(false)
  }

  return (
    <>
      <button className='buttonNewProduct' onClick={handleShow}>Add new user + </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>Creating a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" value={dataUser.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" value={dataUser.password} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <select name="role" className='selectRoleNewUser' onChange={handleChange}>
                <option value=''>Select an option</option>
                <option value='admin'>Admin</option>
                <option value='waiter'>Waiter</option>
                <option value='chef'>Chef</option>
              </select>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='buttonModalSubmitNewUser' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function ModalCreateProduct() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dataProduct, setdataProduct] = useState({ image: '', name: '', price: '', type:'' });

  const handleChange = ({ target }) => {
    setdataProduct({
      ...dataProduct,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseRequestNewProduct = await requestHTTPNewProduct(dataProduct)
    console.log(responseRequestNewProduct)
    setShow(false)
  }

  return (
    <>
      <button className='buttonNewProduct' onClick={handleShow}>Add new product + </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>Creating a new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Image:</Form.Label>
              <Form.Control name="image" onChange={handleChange} placeholder="Enter URL" value={dataProduct.image} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name:</Form.Label>
              <Form.Control name="name" onChange={handleChange} placeholder="Name" value={dataProduct.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price:</Form.Label>
              <Form.Control name="price" onChange={handleChange} placeholder="$$$" value={dataProduct.price} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label>Type</Form.Label>
              <select name="role" className='selectRoleNewUser' onChange={handleChange}>
                <option value=''>Select an option</option>
                <option value='Desayuno'>Breakfast</option>
                <option value='Almuerzo'>Lunch</option>
              </select>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='buttonModalSubmitNewUser' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export { ModalWrongUser, ModalCreateUser, ModalCreateProduct } 