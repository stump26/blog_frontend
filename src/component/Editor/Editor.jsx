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
  const [tagInput, setTagInput] = useState('');
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
    if (e.target.value.slice(-1) === ',') {
      const regexp = new RegExp(`\b${tagInput}\b`, 'gi');
      if (!tags.some((t) => regexp.test(t.tagName))) {
        setTags([...tags, { __typename: 'Tag', tagName: tagInput }]);
      }
      setTagInput('');
    } else {
      setTagInput(e.target.value);
    }
  });

  const onClickTagErase = useCallback((e) => {
    const targetTagName = e.target.parentElement.children[0].innerText;
    setTags(tags.filter((t) => t.tagName !== targetTagName));
  });

  const onClickSave = useCallback(() => {
    const tagNamesList = tags.reduce((acc, cur) => {
      acc.push(cur.tagName);
      return acc;
    }, []);

    writePost({
      variables: {
        title: title,
        writer: 'stump26',
        description: value,
        tags: tagNamesList,
      },
    });
  });

  const onClickUpdate = useCallback(() => {
    const tagNamesList = tags.reduce((acc, cur) => {
      acc.push(cur.tagName);
      return acc;
    }, []);
    updatePostQuering({
      variables: {
        id: postID,
        newTitle: title,
        newDescription: value,
        newTags: tagNamesList,
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
    const output = `![${img.name}](${encodeURI(img.path)})`;
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

  // 수정모드인경우 postid를 통해 쿼리요청.
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

        <TextField
          className="input-tags"
          onChange={onTypeTags}
          value={tagInput}
          InputProps={{
            startAdornment: (
              <>
                {tags.map((t, index) => (
                  <div className="tag-item" key={`tag${index}`}>
                    <span className="tag-name">{t.tagName}</span>{' '}
                    <span className="tag-erase" onClick={onClickTagErase}>
                      &nbsp;x&nbsp;
                    </span>
                  </div>
                ))}
              </>
            ),
          }}
        />
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
