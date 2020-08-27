import React, { useEffect, useState } from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import config from '../../config';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { Contact } from '../components/contact';
import { Sections } from '../components/sections';

const IndexPage = () => {
  const [localConfig, setLocalConfig] = useState(config);
  const [loadingFullPage, setLoadingFullPage] = useState(false);
  const [configLoadingError, setConfigLoadingError] = useState(false);
  // useEffect(() => {
  //   setLoadingFullPage(true);
  //   fetch('https://api.jsonbin.io/b/5f3571314d93991036143704/1', {
  //     headers: {
  //       'secret-key':
  //         '$2b$10$9QBkbjUAZmd.MdsutmbEW.uUlHWhR7ic/OytCoQp53BbYMFeE9LGC',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success !== false) {
  //         setLocalConfig(data);
  //         setConfigLoadingError(false);
  //       }
  //     })
  //     .catch(e => {
  //       // setConfig(OFFLINE_CONFIG);
  //       setLoadingFullPage(false);
  //     });
  // }, []);

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Layout>
          {loadingFullPage && <div className="loading"></div>}

          {localConfig && !loadingFullPage && (
            <>
              <Sidebar config={localConfig} />
              <div className="container-fluid p-0">
                <section
                  className="resume-section p-3 p-lg-5 d-flex align-items-center"
                  id="about"
                >
                  <div className="w-100">
                    <h1 className="mb-0">
                      {localConfig.firstName}
                      <span className="text-primary lastName">
                        {localConfig.lastName}
                      </span>
                    </h1>
                    <label>
                      <input
                        type="checkbox"
                        onChange={e => {
                          toggleTheme(e.target.checked ? 'dark' : 'light');
                        }}
                        checked={theme === 'dark'}
                      />
                      {' '}
                      Dark mode
                    </label>
                    <Contact config={localConfig} />
                    <p className="lead mb-5">{localConfig.bioCopy}</p>
                  </div>
                </section>
                <Sections config={localConfig} />
              </div>
            </>
          )}
        </Layout>
      )}
    </ThemeToggler>
  );
};

export default IndexPage;
