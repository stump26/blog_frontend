import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Markdown } from 'react-showdown';
import {
  TextField,
  Typography,
  Divider,
  Button,
  Modal,
} from '@material-ui/core';
import { Save as SaveIcon } from '@material-ui/icons';
import SimpleMDE from 'react-simplemde-editor';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { WRITE_POST } from 'graphql/queries/postQueries';
import ImageUploader from 'component/ImageUploader';

import 'easymde/dist/easymde.min.css';
import './Editor.scss';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState('#Hello World');
  const [imageUploaderModalIsOpen, setImageUploaderModalIsOpen] = useState(
    false,
  );
  const history = useHistory();
  const [writePost, { loading, error }] = useMutation(WRITE_POST, {
    onCompleted({ writePost: { _id } }) {
      history.push(`/post/${_id}`);
    },
  });
  const onTypeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onTypeTags = (e) => {
    const inputString = e.target.value;
    setTags(inputString.split(/,\s?/));
  };
  const onClickSave = (e) => {
    writePost({
      variables: {
        title: title,
        writer: 'stump26',
        description: value,
        tags: tags,
      },
    });
  };
  const handleImageUploadModal = (editor) => {
    setImageUploaderModalIsOpen(true);
  };
  // 사용자가 모달의 x를 눌러 업로드 취소.
  const handleImageUploadModalClose = () => {
    setImageUploaderModalIsOpen(false);
  };
  // 사용자가 업로드를 완료한경우 이루어져야될것
  // For editing result
  // const cm = editor.codemirror;
  // console.log('handleImageUploadModal-test');
  // const output = `[](https://)`;
  // cm.replaceSelection(output);

  // simpleMDE tool 객체
  const customImageUploadTool = {
    name: 'custom-image',
    action: handleImageUploadModal,
    className: 'fa fa-picture-o',
    title: 'Custom-Image-button',
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
          toolbar: [
            'bold',
            'italic',
            'heading',
            '|',
            'quote',
            'ordered-list',
            'unordered-list',
            '|',
            'code',
            customImageUploadTool,
            'table',
            'link',
            '|',
            'preview',
            'side-by-side',
            'fullscreen',
          ],
          previewRender: (text) => {
            return ReactDOMServer.renderToString(<Markdown markup={text} />);
          },
          uploadImage: true,
          imageUploadFunction: () => {
            console.log('test');
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
      <Modal open={imageUploaderModalIsOpen}>
        <div className="image-uploader-modal-container">
          <ImageUploader handleModalClose={handleImageUploadModalClose} />
        </div>
      </Modal>
    </div>
  );
};

export default Editor;
