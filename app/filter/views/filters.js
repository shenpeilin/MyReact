import React from 'react';
import Link from './link.js';
import {FilterTypes} from '../../constants.js'

import css from './style.css';

const Filters = () => {
  return (
    <p className="css.filters">
      <Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>
      <Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>
      <Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>
    </p>
  );
};

export default Filters;