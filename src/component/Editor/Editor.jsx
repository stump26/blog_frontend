import React, { useState } from 'react';
import * as Showdown from 'showdown';
import { TextField, Typography, Divider, Button } from '@material-ui/core';
import { Save as SaveIcon } from '@material-ui/icons';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import './Editor.scss';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const Editor = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState('#Hello World');

  const onTypeTitle = e => {
    setTitle(e.target.value);
  };
  const onTypeTags = e => {
    const inputString = e.target.value;
    setTags(inputString.split(/,\s?/));
  };

  return (
    <div id="container">
      <div className="title-field">
        <Typography className="label-title"> 제목 </Typography>
        <Divider orientation="vertical" />
        <TextField
          className="input-title"
          margin="normal"
          onChange={onTypeTitle}
        />
      </div>
      <div className="tag-field">
        <Typography className="label-tags"> tag </Typography>
        <Divider orientation="vertical" />
        <TextField className="input-tags" onChange={onTypeTags} />
      </div>

      <SimpleMDE
        value={value}
        onChange={setValue}
        options={{
          previewRender: text => {
            return converter.makeHtml(text);
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="saveBtn"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </div>
  );
};

export default Editor;
