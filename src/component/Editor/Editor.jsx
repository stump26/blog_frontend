import React, { useState, useEffect, useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';
import { TextField, Typography, Divider, Button, Modal } from '@material-ui/core';
import { Save as SaveIcon, Update as UpdateIcon } from '@material-ui/icons';
import SimpleMDE from 'react-simplemde-editor';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import { WRITE_POST, GET_POST_BYID, UPDATE_POST } from '../../graphql/queries/postQueries';
import ImageUploader from '../ImageUploader';
import MDRenderer from '../commons/MarkdownRenderer';

process.browser && require('easymde/dist/easymde.min.css');
import './Editor.scss';

const Editor = ({ postID }) => {
  const [editMode, setEditMode] = useState(postID !== undefined); // false: newPost, true: modifyPost
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState('#Hello World');
  const [focusedEditor, setFocusedEditor] = useState(null);
  const [imageUploaderModalIsOpen, setImageUploaderModalIsOpen] = useState(false);
  const history = useHistory();

  // 글 id 조회 graphql query
  const [currentPostdata] = useLazyQuery(GET_POST_BYID, {
    variables: { id: postID },
    fetchPolicy: 'cache-and-network', // 게시글(post)에서 한번 동일한 조회가 캐싱되어 안보이는것을 방지.
    onCompleted: ({ post_BY_ID: curPostData }) => {
      setTitle(curPostData.title);
      setTags(curPostData.tags);
      setValue(curPostData.description);
    },
  });

  // 글 작성 grapql mutation
  const [writePost, { loading: writeLoding, error: writeErr }] = useMutation(WRITE_POST, {
    onCompleted({ writePost: { _id } }) {
      history.push(`/post/${_id}`);
    },
  });

  // 글 업데이트 graphql mutation
  const [updatePostQuering, { loading: updateLoding, error: updateErr }] = useMutation(
    UPDATE_POST,
    {
      onCompleted: ({ updatePost: { _id } }) => {
        history.push(`/post/${_id}`);
      },
    },
  );

  const onTypeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const onTypeTags = useCallback((e) => {
    const inputString = e.target.value;
    setTags(inputString.split(/,\s?/));
  });

  const onClickSave = useCallback(() => {
    writePost({
      variables: {
        title: title,
        writer: 'stump26',
        description: value,
        tags: tags,
      },
    });
  });
  const onClickUpdate = useCallback(() => {
    updatePostQuering({
      variables: {
        id: postID,
        newTitle: title,
        newDescription: value,
        newTags: tags,
      },
    });
  });

  const handleImageUploadModal = (editor) => {
    setImageUploaderModalIsOpen(true);
    setFocusedEditor(editor);
  };
  // 사용자가 모달의 x를 눌러 업로드 취소.
  const handleImageUploadModalClose = () => {
    setImageUploaderModalIsOpen(false);
    setFocusedEditor(null);
  };

  // 사용자가 업로드를 완료한경우 이루어져야될것
  // For editing result
  const handleImageUploadComplet = (img) => {
    const cm = focusedEditor.codemirror;
    const output = `![${img.name}](${img.path})`;
    cm.replaceSelection(output);
    setImageUploaderModalIsOpen(false);
  };
  // simpleMDE tool 객체
  const customImageUploadTool = {
    name: 'custom-image',
    action: handleImageUploadModal,
    className: 'fa fa-picture-o',
    title: 'Custom-Image-button',
  };

  // 수정모드인경우 postid를통해 쿼리요청.
  useEffect(() => {
    if (postID !== undefined) {
      currentPostdata();
    }
  }, [postID]);

  return (
    <div id="editor-container">
      <div className="title-field">
        <Typography className="label-title"> 제목 </Typography>
        <Divider orientation="vertical" />
        <TextField className="input-title" value={title} margin="normal" onChange={onTypeTitle} />
      </div>
      <div className="tag-field">
        <Typography className="label-tags"> tag </Typography>
        <Divider orientation="vertical" />
        <TextField className="input-tags" onChange={onTypeTags} value={tags.join(', ')} />
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
            return ReactDOMServer.renderToString(<MDRenderer markup={text} />);
          },
          uploadImage: true,
          renderingConfig: {
            singleLineBreaks: false,
            codeSyntaxHighlighting: true,
          },
        }}
      />
      {editMode ? (
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="saveBtn"
          startIcon={<UpdateIcon />}
          onClick={onClickUpdate}
          disabled={updateLoding}
        >
          Update
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="saveBtn"
          startIcon={<SaveIcon />}
          onClick={onClickSave}
          disabled={writeLoding}
        >
          Save
        </Button>
      )}
      <Modal open={imageUploaderModalIsOpen}>
        <div className="image-uploader-modal-container">
          <ImageUploader
            handleModalClose={handleImageUploadModalClose}
            handleImageUploadComplet={handleImageUploadComplet}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Editor;
