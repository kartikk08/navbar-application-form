// import React, { createFactory } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container } from 'react-bootstrap';
import { Col, Row, Card } from 'react-bootstrap';

 const Contact = () => {

    //const{ register,handleSubmit} = useForm()
    return (
    
        
      <Container className="xs=6">
      <Row className="vh-100 d-flex justify-content-md-center">
          <Col md={8} lg={6} xs={12}>
      <h1 className="text-center mt-2 ">Your Personal Details</h1><br/>

     {/* <Form.Group className="mb-10 " controlId="formBasicPassword"> */}
        <div className='d-flex'><Form.Label>First Name</Form.Label> 
        &nbsp;&nbsp;
        <Form.Control type="firstName" style={{width:180,height: 30}}  label="First Name" placeholder="first name" inline /> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;  
        <Form.Label>Last Name</Form.Label> &nbsp;&nbsp;
        <Form.Control type="lastName" style={{width:180,height: 30, paddingLeft:20}} placeholder="last name" inline /> <br/>
        </div> 

      <Form.Group>
        <Form.Label>Gender</Form.Label> <br/>
        <Form.Check name ="gender" label="Male" inline type="radio" />
        <Form.Check name ="gender" label="Female" inline type="radio"/>
      </Form.Group>
      <br/>
      <Form.Group controlId = 'dob'>
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type = 'date' placeholder='Enter date of birth'></Form.Control>
      </Form.Group>

    
<br/>
      <Form.Group className="mb-50" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
<br/>
      <Form.Group className="mb-10" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
         Do not share your Password with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phonenumber" placeholder="Phone Number" />
                      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Sign-in" padding-left="10px" />
      </Form.Group>
      
      <Button className ="mb-5" variant="primary" type="submit">
        Submit
      </Button>
      <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
      </Col>
        </Row>
       </Container>
       
 

    )
  }

export default Contact