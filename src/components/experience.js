import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ jobList, isOpen }) => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        {jobList.map(job => (
          <div key={job.companyName} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">{job.jobTitle}</h3>
              <div className="subheading mb-3">{job.companyName}</div>
              <p>{job.description}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                {job.startDate} - {job.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Experience.propTypes = {
  jobList: PropTypes.array,
  isOpen: PropTypes.bool,
};

export { Experience };
