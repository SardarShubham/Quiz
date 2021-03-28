import React, {Component} from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import {Nav, NavItem, Navbar, Collapse, NavbarBrand, NavbarToggler} from 'reactstrap';
import QuizComponent from './QuizComponent';

class MainComponent extends Component 
{
    constructor(props){
        super(props);
        this.state={
            isMenuOpen : false
        }
        this.navtoggle = this.navtoggle.bind(this);
    }

    navtoggle(){
        this.setState({isMenuOpen : !this.state.isMenuOpen});
    }

    render(){
        return(
            <div className="Main" style={{background: `url('${process.env.PUBLIC_URL}/assets/bg.jpg')`}}> 
            <Navbar color="dark" dark expand="xl">
                <NavbarBrand><h2>Menu</h2></NavbarBrand>
                <NavbarToggler onClick={this.navtoggle} className='button'/>
                <Collapse isOpen={this.state.isMenuOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                        <Link to="/about">About</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/quiz/questions"> Quiz</Link>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
           <Switch>
               <Route exact path="/quiz"><HomeComponent/></Route>
               <Route exact path="/quiz/questions"> <QuizComponent/></Route>
               <Route path="/about"> <AboutComponent/></Route>
               <Redirect to="/quiz"/>
           </Switch> 
           </div>
        );
    
    }

}

export default MainComponent;