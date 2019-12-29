import React from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import highlight from 'rehype-highlight';

import './atom-one-dark-reasonable.min.css';

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(highlight)
  .use(rehype2react, { createElement: React.createElement });

const MarkdownRenderrr = ({ markup }) => {
  return processor.processSync(markup).contents;
};

export default MarkdownRenderrr;
