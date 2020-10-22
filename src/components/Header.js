import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';

const Header = (props) => {
  return (
    <Fragment>
      <img src={logo} alt="Tic Tac Toe" className="logo" />
      <h1 className="niceFont">Tic Tac Toe</h1>
      <Link to="/start" className="btn-dark btn-lg niceFont" role="button">Start</Link>
    </Fragment>
  );
}

export default Header;
