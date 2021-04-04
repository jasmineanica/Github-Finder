import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // default types when no props are passed in from App.js
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  //sets expected types and errors when not the expected type
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}/> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
