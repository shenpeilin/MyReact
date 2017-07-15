import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';
import css from './style.css';

const Link = ({active, children, onClick}) => {
  if (active) {
    return <b className="css.filter selected">{children}</b>;
  } else {
    return (
      <a href="#" className="css.filter not-selected" onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}>
        {children}
      </a>
    );
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);