import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from "../../context/github/githubContext";


const Search = ({ showClear, clearUsers, setAlert }) => {
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
      {showClear && (
        <button
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}

    </div>
  );
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
