import React, {useState} from 'react';
import {Converter} from 'react-showdown';
import {TextField, Typography, Divider, Button} from '@material-ui/core';
import {Save as SaveIcon} from '@material-ui/icons';
import SimpleMDE from 'react-simplemde-editor';
import {useMutation} from '@apollo/react-hooks';
import {useHistory} from 'react-router-dom';

import {WRITE_POST} from 'graphql/queries/postQueries';

import 'easymde/dist/easymde.min.css';
import './Editor.scss';

const Editor = () => {
  const [title, setTitle] = useState ('');
  const [tags, setTags] = useState ([]);
  const [value, setValue] = useState ('#Hello World');
  const history = useHistory ();
  const [writePost, {loading, error}] = useMutation (WRITE_POST, {
    onCompleted({writePost: {_id}}) {
      history.push (`/post/${_id}`);
    },
  });
  const onTypeTitle = e => {
    setTitle (e.target.value);
  };
  const onTypeTags = e => {
    const inputString = e.target.value;
    setTags (inputString.split (/,\s?/));
  };
  const onClickSave = e => {
    writePost ({
      variables: {
        title: title,
        writer: 'stump26',
        description: value,
        tags: tags,
      },
    });
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
            return Converter.convert (text);
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="saveBtn"
        startIcon={<SaveIcon />}
        onClick={onClickSave}
        disabled={loading}
      >
        Save
      </Button>
    </div>
  );
};

export default Editor;
