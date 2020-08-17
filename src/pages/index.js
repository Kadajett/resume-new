import React, { useEffect, useState } from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import { OFFLINE_CONFIG } from '../constants';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { Contact } from '../components/contact';
import { Sections } from '../components/sections';

const IndexPage = () => {
  const [config, setConfig] = useState(null);
  const [loadingFullPage, setLoadingFullPage] = useState(false);
  const [configLoadingError, setConfigLoadingError] = useState(false);
  useEffect(() => {
    setLoadingFullPage(true);
    fetch('https://api.jsonbin.io/b/5f3571314d93991036143704/1', {
      headers: {
        'secret-key':
          '$2b$10$9QBkbjUAZmd.MdsutmbEW.uUlHWhR7ic/OytCoQp53BbYMFeE9LGC',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.success !== false) {
          setConfig(data);
          setConfigLoadingError(false);
        }
      })
      .catch(e => {
        setConfig(OFFLINE_CONFIG);
        setLoadingFullPage(false);
      });
  }, []);

  return (
    <Layout>
      {loadingFullPage && <div className="loading"></div>}

      {config && !loadingFullPage && (
        <>
          <Sidebar />
          <div className="container-fluid p-0">
            <section
              className="resume-section p-3 p-lg-5 d-flex align-items-center"
              id="about"
            >
              <div className="w-100">
                <h1 className="mb-0">
                  {config.firstName}
                  <span className="text-primary lastName">{config.lastName}</span>
                </h1>
                <Contact config={config} />
                <p className="lead mb-5">{config.bioCopy}</p>
              </div>
            </section>
            <Sections config={config}></Sections>
          </div>
        </>
      )}
    </Layout>
  );
};

export default IndexPage;
