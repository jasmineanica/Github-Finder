import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import GithubContext from "../../context/github/githubContext";

const ExactMatch = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
  } = user;

  useEffect(() => {
    getUser(login);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner/>
  } else {
    return (
      <Fragment>
      { githubContext.users.length > 0 && (
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

export default ExactMatch;
