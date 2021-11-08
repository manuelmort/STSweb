import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Link } from 'react-router-dom'

import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";

import { Container } from "react-bootstrap";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      name: "",
      password: "",
      loading: false,
      message: ""
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.name, this.state.password).then(
        () => {
          this.props.history.push("/userhome");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
    <div>


        <Container className="d-flex align-items-center justify-content-center"
                    style ={{minHeight: "50vh"}}>
            <div className="col-md-12" style ={{maxWidth: "400px"}}>
                <div className="card card-container bg-transperant shadow-lg" 
                style={{backgroundColor: "rgb(255, 201, 130)"}}>
                

                <Form class="p-3"
                  onSubmit={this.handleLogin}
                  ref={c => {
                  this.form = c;
                  }}>
                    <div className="form-group">
                    <label htmlFor="name" class="">Visions Email</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        
                       
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password "
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required]}
                        
                    />
                    </div>

                    <div className="form-group pt-3">
                        <button
                            className="btn btn-dark btn-block"
                            disabled={this.state.loading}
                            >
                            {this.state.loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                              <span>Login</span>
                              
                          </button>
                    </div>

                    {this.state.message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
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

                    <div class="pt-3">
                        <p>First Time here? <Link to="/stsregister">Register</Link></p>
                    </div>
                   
                     
                    
                </Form>
            </div>
        </div>
      </Container>
    </div>
    );
  }
  
}