import React from 'react';
import ReactPlayerLib from 'react-player';

const ReactPlayer = ({ url, controls, className, width, height }) => {
  return (
    <ReactPlayerLib
      url={url}
      controls={controls}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default ReactPlayer;
