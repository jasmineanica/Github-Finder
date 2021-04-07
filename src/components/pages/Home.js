import React, { Fragment } from 'react';
import Search from '../users/Search';
import ExactMatch from '../users/ExactMatch';
import Users from '../users/Users';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <ExactMatch />
      <Users />
    </Fragment>
  );
}

export default Home;
