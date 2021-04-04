import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    }
  }
  render() {
    return <div className="card text-center">
      <img
        src={this.state.avatar_url}
        alt=""
        className="round-img"
        style={{ width: '70px' }}
      />
      <h3>{this.state.login}</h3>
      <div>
        <a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
      </div>
  }
}

export default UserItem;