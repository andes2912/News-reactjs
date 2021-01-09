import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from 'react-router-dom'

import logo from '../../src/logo.svg'

import { Navbar } from 'react-bootstrap'
import Home from '../components/Home'
import About from '../components/About'
import Technology from '../components/Technology';

function Nav() {
  return (
    <Router>
    <div>
       <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to="/technology">Technology</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/technology">
            <Technology/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default Nav