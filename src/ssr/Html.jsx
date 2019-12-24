import React from 'react';

const Html = ({ content, styledElement, materialStyledElement, apolloState, extractor }) => {
  return (
    <html>
      <head>
        {styledElement}
        {materialStyledElement}
        {extractor.getLinkElements()}
        {extractor.getStyleElements()}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }}></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(apolloState).replace(
              /</g,
              '\\u003c',
            )};`,
          }}
        />
        {extractor.getScriptElements()}
      </body>
    </html>
  );
};

export default Html;
