import React from 'react';
import PropTypes from 'prop-types';
import { OFFLINE_CONFIG } from '../constants';

const Sidebar = ({ config = OFFLINE_CONFIG }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      id="sideNav"
    >
      <div className="social-icons">
        {config.socialLinks.map(social => {
          const { icon, url } = social;
          return (
            <a key={url} href={url}>
              <i className={`fab ${icon}`}></i>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
