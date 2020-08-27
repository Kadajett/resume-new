import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaTwitter, FaStar } from 'react-icons/fa';
const Sidebar = ({ config }) => {
  const getSkillIcon = skillName => {
    let iconComponent = null;
    switch (skillName) {
      case 'fa-github':
        iconComponent = <FaGithub />;
        break;
      case 'fa-linkedin-in':
        iconComponent = <FaLinkedin />;
        break;
      case 'fa-twitter':
        iconComponent = <FaTwitter />;
        break;
      default:
        iconComponent = <FaStar />;
        break;
    }
    return <i className="fab">{iconComponent}</i>;
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      id="sideNav"
    >
      <div className="social-icons">
        {config.socialLinks.map(social => {
          const { icon, url } = social;
          return (
            <a key={url} href={url} key={icon}>
              {getSkillIcon(icon)}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
