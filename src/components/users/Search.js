import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from "../../context/github/githubContext";


const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter a Username', 'light');
    } else {
      //sends user inputted text back to App.js
      githubContext.searchUsers(text);
      //this clears the search form again
      setText('');
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {/* Clear button display logic */}
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}

    </div>
  );
}

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
