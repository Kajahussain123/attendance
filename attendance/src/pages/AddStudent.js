import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button,Nav, Navbar, Toast } from 'react-bootstrap';

function AddStudent() {
  const [studentData, setStudentData] = useState({
    name: '',
    rollNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/students', studentData)
      .then((response) => {
        console.log('Student added:', response.data);
        alert("added successfull")
        window.location.reload()
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  };

  return (
    <Container fluid>
    <Row>
      
      <Col md={3} className="bg-dark sidebar w-25" style={{height:"700px"}}>
        <Nav className="flex-column p-5"  >
          <Nav.Link href="/" className="text-light"> <i class="fa-solid fa-bars"></i> Home</Nav.Link>
          <hr className='text-white' />
          <Nav.Link href="#" className="text-light"> <i class="fa-solid fa-user"></i> Add Student</Nav.Link>
          <hr className='text-white' />
          <Nav.Link href="#" className="text-light"> <i class="fa-solid fa-arrow-right-arrow-left"></i> Menu 3</Nav.Link>
          <hr className='text-white' />
          <Nav.Link href="#" className="text-light"> <i class="fa-solid fa-clipboard-list"></i> Menu 4</Nav.Link>
          <hr className='text-white' />
          <Nav.Link href="#" className="text-light"><i class="fa-regular fa-circle"></i> Menu 5</Nav.Link>
        </Nav>
      </Col>

      <Col md={9}>
      <Navbar expand="lg" className="bg-body-tertiary">
    
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            </Nav>

           
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='me-2'>Search</Button>
          </Form>
          <Nav.Link href="#action1" className='pe-4 '><i class="fa-solid fa-bell fs-2"></i></Nav.Link>
             <Nav.Link href="#action1"className=''><i class="fa-solid fa-gear fs-2"></i></Nav.Link>
        </Navbar.Collapse>
      
    </Navbar>
    <Col md={12} className="main-content">
        <h2 className='p-5 text-center'> <button className='btn btn-primary'><i class="fa-solid fa-arrow-left"></i></button> Octobar <button className='btn btn-primary'> <i class="fa-solid fa-arrow-right"></i> </button></h2>
        <p><span className='p-2'><i class="fa-regular fa-square-check text-danger fs-5"></i> Full Present</span> <span className='p-2'><i class="fa-regular fa-circle-xmark text-danger fs-5"></i> Absent</span> <span className='p-2'><i class="fa-solid fa-circle-half-stroke text-danger fs-5"></i> Half Day</span> <span className='p-2'><i class="fa-solid fa-circle-minus fs-5"></i> Not Uploaded</span></p>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rollNumber">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter roll number"
                name="rollNumber"
                value={studentData.rollNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Student
            </Button>
          </Form>
        </Col>
     
      </Col>

     
    </Row>
  </Container>
  );
}

export default AddStudent;
