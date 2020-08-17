import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';
const SectionHeader = ({ title, isOpen, openSection, ariaTag }) => {
  return (
    <div
      className="sectionHeader"
      aria-controls={ariaTag}
      role="button"
      aria-expanded={isOpen}
      onClick={openSection}
      aria-pressed={isOpen}
    >
      <h2 className="sectionH2">{title}</h2>
      <IconButton>
        {isOpen && <KeyboardArrowUpSharpIcon></KeyboardArrowUpSharpIcon>}
        {!isOpen && <KeyboardArrowDownIcon />}
      </IconButton>
    </div>
  );
};

SectionHeader.propTypes = {};

export { SectionHeader };
