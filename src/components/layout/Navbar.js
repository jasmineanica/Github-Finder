import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}/> {title}
      </h1>
    </nav>
  );
}

// default types when no props are passed in from App.js
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

//sets expected types and errors when not the expected type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
