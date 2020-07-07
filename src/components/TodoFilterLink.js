import React from 'react';
import PropTypes from 'prop-types';

function Link({ active, children, onClick }) {
  return (
    <button onClick={onClick} disabled={active} className="btn btn-light link-btn">
      {children}
    </button>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Link };
