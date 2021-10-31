import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { Container } from "react-bootstrap";


export default class Login extends Component {


  render() {
    return (
    <div>
        <Container className="d-flex align-items-center justify-content-center"
                    style ={{minHeight: "50vh"}}>
            <div className="col-md-12" style ={{maxWidth: "400px"}}>
                <div className="card card-container bg-transperant shadow-lg" 
                style={{backgroundColor: "rgb(253, 236, 214)"}}>
                

                <Form class="p-3">
                    <div className="form-group">
                    <label htmlFor="username" class="">Visions Email</label>
                    <Input
                        type="text"
                        className="form-control bg-dark text-white"
                        name="email"
                        placeholder="Email"
                       
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="form-control bg-dark text-white"
                        name="password"
                        placeholder="Password "
                        
                    />
                    </div>

                    <div className="form-group pt-3">
                        <button
                            className="btn btn-dark btn-block">Login</button>
                    </div>
                     
                    
                </Form>
            </div>
        </div>
      </Container>
    </div>
    );
  }
  
}