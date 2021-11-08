import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Container } from "react-bootstrap";
import AuthService from "../services/auth.service";

import { Link } from 'react-router-dom'

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const email = value => {
    var idx = value.indexOf('@viedu.org');

    if (!idx > -1) {
        <div>
            Sorry this is not a visions email
        </div>
    }
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );

      
    }
  };
  
  const vname = value => {
    if (value.length < 1 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          Please enter your first name.
        </div>
      );
    }
  };
  
  const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

export default class Register extends Component {

   
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
      
        this.state = {
        name: "",
        email: "",
        password: "",
        successful: false,
        message: ""
        };
    }
    onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
    onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
    }
    


    handleRegister(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          successful: false
    
        });

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
              this.state.name,
              this.state.email,
              this.state.password
            ).then(
              response => {
                this.setState({
                  message: response.data.message,
                  successful: true
                });
              },
              error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                this.setState({
                  successful: false,
                  message: resMessage
                });
              }
            );
        }

    }

  render() {
    return (
      <div>
        <Container className ="d-flex align-items-center justify-content-center"
            style ={{minHeight: "50vh"}}>
            <div className="col-md-12" style ={{maxWidth: "400px"}}>
            <div className="card card-container bg-transperant shadow-lg"
            style={{backgroundColor: "rgb(255, 201, 130)"}}>
                

                <Form class="p-3"
                    onSubmit={this.handleRegister}
                    ref={c => {
                      this.form = c;
                    }}
                >
                
                {!this.state.successful && (
                    <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="First Name"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        validations={[required, vname]}
                        
                        />  
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Visions Email</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required, email]}
                        
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required, vpassword]}
                        
                        />
                    </div>

                    <div className="form-group pt-3">
                        <button className="btn btn-dark btn-block">Sign Up</button>
                    </div>
                    <div class="pt-3">
                        <p>Already have an account?<Link to="/stslogin"> Login</Link></p>
                    </div>
                    
                    </div>
                )}


                
                {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
                

                
                
                </Form>
            </div>
            </div>
        </Container>
      </div>
        );
    }
}