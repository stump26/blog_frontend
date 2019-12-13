import React from 'react';

import remark2react from 'remark-react';
import parse from 'remark-parse';
import unified from 'unified';
import githubSchema from 'hast-util-sanitize/lib/github.json';

import CodeSection from './CodeSection';
import './atom-one-dark-reasonable.min.css';
import languages from './common-languages.js';

const schema = {
  ...githubSchema,
  attributes: {
    ...githubSchema.attributes,
    code: [...(githubSchema.attributes.code || []), 'className'],
  },
};

export default ({ markup }) => {
  return (
    <>
      {
        unified()
          .use(parse, { commonmark: true })
          .use(remark2react, {
            sanitize: schema,
            remarkReactComponents: {
              code: CodeSection(languages),
            },
          })
          .processSync(markup, {
            commonmark: true,
          }).contents
      }
    </>
  );
};
