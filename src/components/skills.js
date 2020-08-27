import React from 'react';
import PropTypes from 'prop-types';
import {
  FaCode,
  FaNode,
  FaReact,
  FaSass,
  FaAngular,
  FaGulp,
  FaNpm,
} from 'react-icons/fa';

const Skills = ({ skillsList, isOpen }) => {
  const getSkillIcon = skillName => {
    let iconComponent = null;
    switch (skillName) {
      case 'fa-node-js':
        iconComponent = <FaNode />;
        break;
      case 'fa-react':
        iconComponent = <FaReact />;
        break;
      case 'fa-sass':
        iconComponent = <FaSass />;
        break;
      case 'fa-angular':
        iconComponent = <FaAngular />;
        break;
      case 'fa-gulp':
        iconComponent = <FaGulp />;
        break;
      case 'fa-npm':
        iconComponent = <FaNpm />;
        break;
      default:
        iconComponent = <FaCode />;
        break;
    }
    return <i className="fab">{iconComponent}</i>;
  };
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          {skillsList.map(skill => (
            <li className="list-inline-item">{getSkillIcon(skill)}</li>
          ))}
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Functional Teams
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    </section>
  );
};

Skills.propTypes = {
  jobList: PropTypes.array,
  isOpen: PropTypes.bool,
};

export { Skills };
