import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

export class ExactMatch extends Component {
  static propTypes = {
      loading: PropTypes.bool.isRequired,
      user: PropTypes.object.isRequired,
      showUser: PropTypes.bool.isRequired,
      getUser: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getUser(this.props.user.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      company,
      html_url,
    } = this.props.user;

    const { loading, showUser } = this.props;

    if (loading) {
      return <Spinner/>
    } else {
      return (
        <Fragment>
        { showUser && (
          <Fragment>
          <div className="headers">
            <h2> Exact Match </h2>
          </div>
          <div className="card grid-2">
            <div>
              <img
                src={avatar_url}
                className="round-img"
                alt=''
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              {bio &&
                (<Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>)
              }
              <a href={html_url} className='btn btn-dark my-1'>
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong>{login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>{company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>{blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          </Fragment>

        )}
        </Fragment>

      );
    }


  }
}


export default ExactMatch;
