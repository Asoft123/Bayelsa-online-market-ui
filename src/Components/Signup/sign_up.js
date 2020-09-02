import React from "react";
import Joi from "joi-browser";
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import DynamicForm from "../../common/form";
import { register } from '../../services/userService';
import auth from '../../services/authService';
import "./Sign_up.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";

class Register extends DynamicForm {

    state = {
    data: { 
        email: "",
        password: "", 
        firstname: "", 
        lastname: "", 
        phone:"", 
        isAdmin:"" 
      },
    errors: {},
    Roles:[{name:"Admin", _id:true}, {name:"Editor", _id:false}],
    isLoading:false, 
    errorMsg:""
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    isAdmin: Joi.string()
      .required()
      .label("User Role"),
    phone: Joi.string().min(11).max(11)
      .required()
      .label("Phone Number")
  };


  doSubmit = async () => {
    try {
        this.setState({isLoading:true})
        const response = await register(this.state.data);
        console.log(response)
        toast.success("Sign up successful")
        
        setTimeout(()=>{

        window.location = "/profile";
        },2000)
      
    } catch (ex) {
      if(ex.response && ex.response.status === 400){
        const errors = {...this.state.errors}
        errors.email = ex.response.data;
        toast.error(errors.email)
        this.setState({ errors, isLoading:false })
      }

    }
  };

    render() {
      if (auth.getCurrentUser()) return <Redirect to="/profile"/>;
        const { Roles, isLoading, data } = this.state
        console.log(data)
        return (
                <div className="sign-up-box">
                  
                      
                        <Col md={8} sm={12} lg={6}>
                          
                        <Card className="mt-5 mb-5">
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-center align-content-center mt-n4">
                                        <h1 className="text-muted">Add New User</h1>
                                    </Card.Title>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                        {this.renderInput("firstname","First name","text")}   
                                            </Col>
                                            <Col>    
                                        {this.renderInput("lastname","Last name","text")}
                                            </Col>
                                        </Row>
                                        {this.renderInput("email", "Email", "email")}
                                        {this.renderInput("phone", "Phone number", "phone")}
                                        <div className="mt-4">
                                        {this.renderSelect("isAdmin", "Select Role", Roles ? Roles:[{_id:"", name:""}])}
                                        </div>
                                        {this.renderInput("password", "Password", "password")}
                                       <div className="row">
                                         <p className="agree">
                                           By signing up, you agree to our
                                           </p> <Link className="agre" to="/termsconditions">Terms&Conditions</Link>
                                         </div> 
                                        <div className="d-flex justify-content-center">
                                        <button disabled={isLoading} type="submit" className="btn btn-danger p-2 mt-3 btn-block" variant="dark">
                                          {isLoading && <Spinner
                                            className="mr-2"
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />}
                                            { !isLoading && <span>Register</span>}
                                            {isLoading && <span>Registering wait...</span>}
                                      </button>
                                      </div>
                                    </Form>
                                    <div className="d-flex justify-content-end mt-3">

                                    <p>
                                        Have an account? <Link to="/login">Log in</Link>
                                    </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        </div>    
        );
    }
}

export default Register;
