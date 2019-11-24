/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useRef } from 'react';
import Moveable, { updateRect } from 'react-moveable';

const PreviewImage = ({ superElemtnt, file }) => {
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
    console.log('onDrag left, top', left, top);
    console.log('onDrag translate', dist);
    target.style.transform = transform;
  };
  const onScale = ({
    currentTarget,
    target,
    scale,
    dist,
    delta,
    transform,
    clientX,
    clientY,
  }) => {
    console.log(currentTarget);
    if (isPressShift) {
      transform = transform.replace(
        /scale\([0-9.,\s]+\)/g,
        `scale(${scale[0]},${scale[0]})`,
      );
    }
    console.log('TCL: PreviewImage -> transform', transform);
    target.style.transform = transform;
  };
  const onRotate = ({ target, delta, dist, transform, clientX, clientY }) => {
    console.log('onRotate', dist);
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
      console.log('update');
    }
  };
  useEffect(() => {
    setTarget(document.getElementsByClassName('previewTraget')[0]);
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

    if (moveableRef.current) {
      moveableRef.current.updateTarget();
      console.log('update');
    }
  }, [file]);

  return (
    <>
      <img
        className="previewTraget"
        src={file}
        alt="preview"
        style={imgStyle}
        onLoad={() => {
          setIsMoveable(true);
        }}
      />
      {isMoveable && (
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
