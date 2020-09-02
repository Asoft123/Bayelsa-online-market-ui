import React, { Component } from 'react';
import Header from './Header'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sideDrawerOpen: false
        }
      }
    
      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
      };
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
      }
    
      render() {
         const {user} = this.props;
        
        let backdrop;
    
        if (this.state.sideDrawerOpen) {
          
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
          <div className="navigation">
            <Header user={user} drawerClickHandler={this.drawerToggleClickHandler} hideo={this.state.sideDrawerOpen} />
            <SideDrawer show={this.state.sideDrawerOpen} hide={this.backdropClickHandler} user={user}/>
            {backdrop}
            {this.props.children}
          </div>
        
        );
      }
}

export default Navigation;
