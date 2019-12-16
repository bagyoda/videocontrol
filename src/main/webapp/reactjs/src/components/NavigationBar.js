import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand" >/</Link>
        <Nav className="mr-auto">
          <Link to={"/video/save"} className="nav-link">CreateVideo</Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;