import React, { useState, useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Typography, Button } from '@material-ui/core';
import {
  Close as CloseIcon,
  ImageSearch as ImageSearchIcon,
  Publish as PublishIcon,
} from '@material-ui/icons';

import { IMAGE_UPLOAD_QUERY } from '../../graphql/queries/imageQuery';
import PreviewImage from '../PreviewImage';
import './ImageUploader.scss';

let html2canvas = null;
if (process.browser) {
  html2canvas = require('html2canvas');
}

const ImageUploader = ({ handleModalClose, handleImageUploadComplet }) => {
  const [targetFile, setTargetFile] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const [imageUploadMutation] = useCallback(useMutation(IMAGE_UPLOAD_QUERY), []);
  // 이미지 미리보기에 추가.
  const setPreView = async (file) => {
    // 이미지가 아닌것 거르기
    const fileTypeRegex = /^image\/(.*?)/;
    if (!fileTypeRegex.test(file.type)) throw new Error('type error');

    // 10mb이상 거르기.
    if (file.size > 1024 * 1024 * 10) throw new Error('sizeover');

    setTargetFile(file);
  };

  // 이미지 셀렉터를 불러오기 위한.
  const handleImageSelector = () => {
    const imagePathField = document.getElementsByClassName('image-path-field')[0];
    const upload = document.createElement('input');
    upload.type = 'file';
    upload.onchange = (event) => {
      if (!upload.files) return;
      const file = upload.files[0];
      try {
        setPreView(file);
        imagePathField.innerText = file.name;
      } catch (err) {
        if (err === 'type error') {
          alert('지원하지 않는 확장자입니다.');
        } else if (err === 'sizeover') {
          alert('sizeover (upload under 10MB)');
        }
      }
    };
    upload.click();
  };
  const capturePreviewEdit = async () => {
    const previewTarget = document.querySelector('.previewTarget');
    const previewCanvas = await html2canvas(previewTarget);

    return new Promise((resolve, reject) => {
      previewCanvas.toBlob((blob) => {
        const resultBlob = blob;
        resultBlob.name = targetFile.name;
        resultBlob.lastModifiedDate = new Date();
        resolve(resultBlob);
      }, 'image/png');
    });
  };
  // 이미지 업로드 작업.
  const handleUploadImage = async () => {
    let uploadTargetFile = targetFile;
    if (isEdited) {
      uploadTargetFile = await capturePreviewEdit();
    }

    const {
      data: { imageUpload },
    } = await imageUploadMutation({
      variables: {
        file: uploadTargetFile,
        fileSize: uploadTargetFile.size,
        lastModifiedDate: uploadTargetFile.lastModifiedDate,
      },
    });

    handleImageUploadComplet({
      name: uploadTargetFile.name,
      path: imageUpload.filePath,
    });
  };

  return (
    <div className="image-uploader-bg">
      <div className="modal-header">
        <Typography className="modal-title" variant="h5">
          Image Uploader
        </Typography>
        <CloseIcon color="disabled" className="CloseBtn" onClick={handleModalClose} />
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
              file={targetFile}
              isEdited={setIsEdited}
            />
          )}
        </div>
        {/* 구현예정
        <div className="recent-image-list">
          <span className="subTitle-on-div">Recent</span>
        </div> 
        */}
      </div>
      <div className="modal-footer">
        <Button
          variant="contained"
          color="primary"
          className="upload-btn"
          onClick={handleUploadImage}
        >
          <PublishIcon />
          Upload
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ImageUploader);
