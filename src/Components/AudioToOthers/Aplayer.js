import React, { useState, useRef } from "react";
import styled from "styled-components";
// import PlaySrc from '../assets/images/Play.png';


const Aplayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleOkay = () => {
    // Add functionality for okay button
  };

  return (
    <AudioPlayer>
      <PlayerControls>
        <PlayPauseButton onClick={togglePlay}>
          <img
        //   src={PlaySrc}
            src={isPlaying ? "/Users/maibupash/Desktop/Spring 2024/Human Computer-Interface/Clone-udemy/UdemyClone/udemy-clone-appp/src/assets/images/Pause.png" : "/Users/maibupash/Desktop/Spring 2024/Human Computer-Interface/Clone-udemy/UdemyClone/udemy-clone-appp/src/assets/images/Play.png"}
            alt={isPlaying ? "Pause" : "Play"}
          />
        </PlayPauseButton>
        <OkayButton onClick={handleOkay}>Okay</OkayButton>
      </PlayerControls>
      <audio ref={audioRef} src="/PythonAudio.mp3" />
    </AudioPlayer>
  );
};

const AudioPlayer = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: blue;
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayPauseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const PlayPauseImg=styled.img`
width:50px;
height:50px

`

const OkayButton = styled.button`

  /* Styles for the okay button */
`;

export default Aplayer;
