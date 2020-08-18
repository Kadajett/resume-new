import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';
const SectionHeader = ({ title }) => {
  return (
    <div
      className="sectionHeader"
    >
      <h2 className="sectionH2">{title}</h2>
    </div>
  );
};

SectionHeader.propTypes = {};

export { SectionHeader };
