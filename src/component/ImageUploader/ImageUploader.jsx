import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Typography, Button } from '@material-ui/core';
import {
  Close as CloseIcon,
  ImageSearch as ImageSearchIcon,
} from '@material-ui/icons';

import PreviewImage from 'component/PreviewImage';
import './ImageUploader.scss';

const ImageUploader = ({ handleModalClose }) => {
  const [targetFile, setTargetFile] = useState(null);

  // 이미지 업로드 작업.
  const setPreView = (file) => {
    console.log('TCL: uploadImage -> file', file);

    // 이미지가 아닌것 거르기
    const fileTypeRegex = /^image\/(.*?)/;
    if (!fileTypeRegex.test(file.type)) throw new Error('type error');

    setTargetFile(file);

    // 10mb이상 거르기.
    if (file.size > 1024 * 1024 * 10)
      throw new Error('sizeover (upload under 10MB)');
    // 업로드 작업.
  };

  // 이미지 셀렉터를 불러오기 위한.
  const handleImageSelector = () => {
    const imagePathField = document.getElementsByClassName(
      'image-path-field',
    )[0];
    const upload = document.createElement('input');
    upload.type = 'file';
    upload.onchange = (event) => {
      if (!upload.files) return;
      const file = upload.files[0];
      try {
        setPreView(file);
        imagePathField.innerText = file.name;
      } catch (err) {
        console.error(err);
      }
    };
    upload.click();
  };

  return (
    <div className="image-uploader-bg">
      <div className="modal-header">
        <Typography className="modal-title" variant="h5">
          Image Uploader
        </Typography>
        <CloseIcon
          color="disabled"
          className="CloseBtn"
          onClick={handleModalClose}
        />
      </div>
      <div className="modal-body">
        <div className="image-selector-field">
          <span className="image-path-field" />
          <Button className="Image-Search-Btn" onClick={handleImageSelector}>
            <ImageSearchIcon />
            Search
          </Button>
        </div>
        <div id="image-preview">
          {targetFile && (
            <PreviewImage
              superElemtnt={document.getElementById('image-preview')}
              file={URL.createObjectURL(targetFile)}
            />
          )}
        </div>
        <div className="recent-image-list">
          <span className="subTitle-on-div">Recent</span>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
