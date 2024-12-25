


import React from 'react';
import YouTube from 'react-youtube';

const Yt = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=kqtD5dpn9C8';
    const startTime=180;
    const videoId=videoUrl.split('v=')[1];

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        start: startTime,
      },
    };
  
    return (
      <YouTube videoId={videoId} opts={opts} />
    );
  };
  
  export default Yt;
  