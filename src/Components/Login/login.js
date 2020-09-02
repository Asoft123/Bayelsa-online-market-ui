import React from "react";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Morphicform from "../../common/form";
import auth from "../../services/authService";
import "./login.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";


class Login extends Morphicform {
    state = {
        data: { email: "", password: "" },
        isLoading: false,
        errors: {}
    };

    schema = {
        email: Joi.string()
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            this.setState({ isLoading: true });
            const { data } = this.state;
            await auth.login(data.email, data.password);
            toast.success("Login successful");
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : "/profile";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.email = ex.response.data;
                console.log(ex.response.data)
                this.setState({ errors, isLoading: false });
        }else{
            this.setState({isLoading: false})
        }
        }
    };

    render() {
        const { isLoading } = this.state;
        if (auth.getCurrentUser()) return <Redirect to="/profile" />;
        return (
            <div className="login-box">
                    <div className="login-view">
                

                        <Col md={5} sm={6} lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-center align-content-center mt-n3">
                                        <h1 className="text-muted mb-n3">Sign in</h1>
                                    </Card.Title>
                                    <Form onSubmit={this.handleSubmit}>
                                        {this.renderInput("email", "Email", "email")}
                                        {this.renderInput("password", "Password", "password")}
                                        <div className="d-flex justify-content-end mt-1" >
                                        <Link to='forgot-password'>Forgot Password</Link>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                        <button
                                            disabled={isLoading}
                                            type="submit"
                                            className="btn btn-danger p-2 btn-block"
                                        >
                                            {isLoading && (
                                                <Spinner
                                                    className="mr-2"
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {!isLoading && <span>Login</span>}
                                            {isLoading && <span>Logging in wait...</span>}
                                        </button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
               
            </div>
        );
    }
}

export default Login;
