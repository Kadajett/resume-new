import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from '@kunukn/react-collapse';

import { Experience } from './experience';
import { Skills } from './skills';
import { SectionHeader } from './sectionHeader';
import { EXPERIENCE_ID, DEFAULT_DRAWER_STATE } from '../constants';

const Sections = ({ config }) => {
  const [collapseState, setCollapseState] = useState(DEFAULT_DRAWER_STATE);
  
  return (
    <section className="listContainer">
      <hr className="topSection" />
      <SectionHeader
        title={'Experience'}
        isOpen={collapseState.experience}
        openSection={() => {
          setCollapseState({
            ...DEFAULT_DRAWER_STATE,
            experience: !collapseState.experience,
          });
        }}
        ariaTag={EXPERIENCE_ID}
      />
      <Experience jobList={config.jobHistory}></Experience>
      <hr className="m-0" />
      <SectionHeader
        title={'Skills'}
        isOpen={collapseState.skills}
        openSection={() => {
          setCollapseState({
            ...DEFAULT_DRAWER_STATE,
            skills: !collapseState.skills,
          });
        }}
        ariaTag={EXPERIENCE_ID}
      />
      <Skills skillsList={config.skills}></Skills>
      <hr className="sectionBottom" />
    </section>
  );
};

Sections.propTypes = {};

export { Sections };
