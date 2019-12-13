import React from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';
import { relative } from 'upath';

const LangTag = ({ language }) => {
  const tagStyle = {
    position: 'absolute',
    right: '10px',
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: "'Nanum Gothic', 'Segoe UI'",
    color: '#595f6a',
  };

  return <div style={tagStyle}>{language}</div>;
};

export default (languageDefinitions) => {
  Object.keys(languageDefinitions).forEach((language) => {
    const definition = languageDefinitions[language];

    Lowlight.registerLanguage(language, definition);
  });

  const Code = ({ className = '', children }) => {
    const language = className.split('-')[1] || '';
    const value = children[0] || '';
    const props = { value };

    if (Object.keys(languageDefinitions).indexOf(language) > -1) {
      // Include the language only if it was previously registered
      props.language = language;
    }

    console.log('TCL: Code -> language', language);
    return (
      <>
        <LangTag language={language} />
        <Lowlight {...props} />
      </>
    );
  };
  Code.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  return Code;
};
