import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
// import Login from "./Components/Login/Login.js";
// import Forgotpassword from "./Components/forgotPassword/forgotpassword";
// import Resetpassword from "./Components/resetPassword/resetpassword";

import Footer from "./Components/Footer/footer";
import Listmarketer from "./Components/Marketers/register_marketer";
import Navigation from "./Components/Navigation/Navigation";
import Logout from "./Components/logOut/logout";
import auth from "./services/authService";
import Profile from "./Components/Profile/profile";
import Useraddedmarketers from "./Components/UserAddedMarketers/user_add_marketers";
import Register from "./Components/Signup/Sign_up";


class Routes extends Component {
    state = {
        user: {}
    };
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user });
    }


    render() {
        const { user } = this.state;
console.log(user)
        return (
            <div className="body">
            <Router>
                <div>
                    <ToastContainer />
                    <Switch>
                        {/* <Route path="/forgot-password" component={Forgotpassword} />
                        <Route path="/reset-password/:token" component={Resetpassword} />
                       <Route path="/login" component={Login} /> */}
                        <Navigation user={user}>
                            <Route
                                path="/"
                                exact
                                render={props => <App {...props} user={user} />}
                            />
                            <Route path="/add-new-user" component={Register} /> }
                            <Route path='/add-marketer' component={Listmarketer}/>
                            <Route path="/profile" component={Profile} />
                            <Route path="/marketer/:id" component={Useraddedmarketers} />
                            <Route path="/logout" component={Logout} />
                        <Footer />
                        </Navigation>
                    </Switch>
                </div>
            </Router>
            </div>
        )};
     }

export default Routes;
