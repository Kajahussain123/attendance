import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Nav, Navbar, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   
    axios.get('/') 
      .then(response => {
        setStudents(response.data); 
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);
  return (
    <Container fluid>
    <Row>
      
      <Col md={3} className="bg-dark sidebar w-25" style={{height:"700px"}}>
        <Nav className="flex-column p-5"  >
          <Nav.Link href="/" className="text-light" > <i class="fa-solid fa-bars"></i> Home</Nav.Link>
          <hr className='text-white' />
          <Nav.Link href="./add-student" className="text-light"> <i class="fa-solid fa-user"></i> Add Student</Nav.Link>
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
        <Table striped className='w-100'>
      <thead>
        <tr>
          <th>Name</th>
          <th>01 Sun</th>
          <th>02 Mon </th>
          <th>03 Tue</th>
          <th>04 Wed</th>
          <th>05 Frd</th>
          <th>06 Sat</th>
          <th>07 Sun</th>
          <th>08 Mon</th>
          <th>09 Tue</th>
          <th>10 Wed</th>
          <th>11 Thu</th>
        </tr>
      </thead>
      <tbody>
        <tr key={students._id}>
          <td>John</td>
          <td><i class="fa-regular fa-square-check"></i></td>
          <td><i class="fa-regular fa-circle-xmark"></i></td>
          <td><i class="fa-solid fa-circle-minus"></i></td>
          <td><i class="fa-solid fa-circle-half-stroke"></i></td>
          <td><i class="fa-solid fa-circle-exclamation"></i></td>
          <td><i class="fa-solid fa-circle-minus"></i></td>
          <td><i class="fa-regular fa-square-check"></i></td>
          <td><i class="fa-regular fa-circle-xmark"></i></td>
          <td><i class="fa-regular fa-square-check"></i></td>
          <td><i class="fa-solid fa-circle-minus"></i></td>
          <td><i class="fa-solid fa-circle-half-stroke"></i></td>
        </tr>
        
      </tbody>
    </Table>
      </Col>
      </Col>

     
    </Row>
  </Container>
  )
}

export default Home