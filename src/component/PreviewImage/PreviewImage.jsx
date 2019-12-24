/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useRef } from 'react';
import loadable from '@loadable/component';

const Moveable = loadable(() => import('react-moveable'));

const PreviewImage = ({ superElemtnt, file, isEdited }) => {
  // console.log('TCL: PreviewImage -> file', file);
  const [srcImage, setSrcImage] = useState(null);
  const [target, setTarget] = useState(null);
  const [isMoveable, setIsMoveable] = useState(false);
  const [isPressShift, setIsPressShift] = useState(false);
  const moveableRef = useRef();
  const onDrag = ({
    target,
    beforeDelta,
    beforeDist,
    left,
    top,
    right,
    bottom,
    delta,
    dist,
    transform,
    clientX,
    clientY,
  }) => {
    target.style.transform = transform;
  };
  const onScale = ({ currentTarget, target, scale, dist, delta, transform, clientX, clientY }) => {
    isEdited(true);
    if (isPressShift) {
      transform = transform.replace(/scale\([0-9.,\s]+\)/g, `scale(${scale[0]},${scale[0]})`);
    }
    target.style.transform = transform;
  };
  const onRotate = ({ target, delta, dist, transform, clientX, clientY }) => {
    isEdited(true);
    target.style.transform = transform;
  };
  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const keydownHandler = ({ key }) => {
    if (key === 'Shift') {
      setIsPressShift(true);
    }
  };
  const keyupHandler = ({ key }) => {
    if (key === 'Shift') {
      setIsPressShift(false);
    }
  };
  const onWindowReisze = () => {
    if (moveableRef.current) {
      moveableRef.current.updateTarget();
    }
  };
  // convert blob to Base64
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const changePreviewImage = async () => {
    setSrcImage(await toBase64(file));
  };

  useEffect(() => {
    setTarget(document.getElementsByClassName('previewTarget')[0]);
    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);
    window.addEventListener('resize', onWindowReisze);
    window.addEventListener('scroll', onWindowReisze);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
      window.removeEventListener('keyup', keyupHandler);
      window.removeEventListener('resize', onWindowReisze);
      window.removeEventListener('scroll', onWindowReisze);
    };
  }, []);

  useEffect(() => {
    setIsMoveable(false);
    changePreviewImage();
    if (moveableRef.current) {
      moveableRef.current.updateTarget();
    }
  }, [file]);

  return (
    <>
      <img
        className="previewTarget"
        src={srcImage}
        alt="preview"
        style={imgStyle}
        onLoad={() => {
          setIsMoveable(true);
        }}
      />
      {isMoveable && file.type !== 'image/gif' && (
        <Moveable
          ref={moveableRef}
          target={target}
          container={superElemtnt}
          draggable={true}
          scalable={true}
          rotatable={true}
          origin={false}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleScale={0.01}
          onDrag={onDrag}
          onScale={onScale}
          onRotate={onRotate}
          // onDragEnd={this.onEnd}
          // onScaleEnd={this.onEnd}
          // onRotateEnd={this.onEnd}
        />
      )}
    </>
  );
};

export default PreviewImage;
