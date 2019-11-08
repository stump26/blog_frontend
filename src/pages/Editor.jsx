import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import * as Showdown from 'showdown';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const Editor = () => {
  const [value, setValue] = useState('#Hello World');
  return (
    <div>
      <SimpleMDE
        value={value}
        onChange={setValue}
        options={{
          previewRender(text) {
            return ReactDOMServer.renderToString(
              Promise.resolve(converter.makeHtml(text)),
            );
          },
        }}
      />
    </div>
  );
};

export default Editor;
