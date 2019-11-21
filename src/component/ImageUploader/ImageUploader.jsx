import React from 'react';
import { Typography, Button } from '@material-ui/core';
import {
  Close as CloseIcon,
  ImageSearch as ImageSearchIcon,
} from '@material-ui/icons';

import './ImageUploader.scss';

const ImageUploader = () => {
  const uploadImage = (file) => {
    if (file.size > 1024 * 1024 * 10)
      throw new Error('sizeover (upload under 10MB)');
    const fileTypeRegex = /^image\/(.*?)/;
    if (!fileTypeRegex.test(file.type)) throw new Error('type error');
  };
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
        uploadImage(file);
        imagePathField.innerText = file.name;
        console.log('TCL: upload.onchange -> file', file);
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
        <CloseIcon color="disabled" className="CloseBtn" />
      </div>
      <div className="modal-body">
        <div className="image-selector-field">
          <span className="image-path-field" />
          <Button className="Image-Search-Btn" onClick={handleImageSelector}>
            <ImageSearchIcon />
            Search
          </Button>
        </div>
        <div className="image-preview"></div>
        <div className="recent-image-list">
          <span className="subTitle-on-div">Recent</span>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
