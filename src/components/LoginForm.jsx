import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const [userName,setUserName] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userName",userName);
    window.location.href="/home";
  }
  return (
    <div className='d-flex justify-content-center'>
      <Form className='col-6 text-center' onSubmit = {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-danger mt-5 fs-1'>Enter Your GitHub Username</Form.Label>
          <Form.Control type="text" placeholder="Please Enter Your GitHub Username" value={userName} onChange={(e)=> setUserName(e.target.value)} required/>
          <Form.Text className="text-muted">
          Please be sure that your username is exactly correct else you can not see the your followers.
        </Form.Text>
        </Form.Group>
        <Button  variant="success" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm