import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'/> {alert.msg}
      </div>
    )
  );
}

//sets expected types and errors when not the expected type
Alert.propTypes = {
  alert: PropTypes.object.isRequired
};

export default Alert;
