import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import YouTube from 'react-youtube';
import Navbar from "./Navbar";


const Container = styled.div`

  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display:flex;
  align-items:center;
  flex-direction:column;
  height:100vh;

`;
const SectionHeading = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  transition: color 0.3s; // Smooth transition for color change

  &:hover {
    color: #ff6600; // Change color on hover
    cursor: pointer; // Show pointer cursor on hover
  }
`;
const StyledYouTube = styled(YouTube)`
width: 85%;
height: 500px;
  margin-top:40px;
  border: 10px solid #f08700;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.04); // Scale up on hover for a subtle effect
  }
`;


function Video() {
  const location = useLocation();
  const selectedText =new URLSearchParams(location.search).get("selectedText") || "";
  const [startTime, setStartTime] = useState(0);
  const sections = {
      "Introduction": 0,
      "Introduction To Python": 0,
      "Python Basics": 30,
      "Control Flow": 60,
      "Strings": 1137,
      "Variables": 337,
      "Receiving Input": 569,
      "Type Conversions": 662,
      "Arithmetic Operators": 1457,
      "Operator Precedence": 1573,
      "Comparision Operator": 1688,
      "Logical Operators": 1776,
      "If Statements": 1887,
      "Exercise": 2219,
      "While loops": 2566,
      "lists": 2760,
      "list Methods": 2977,
      "For Loops": 3186,
      "range()": 3382,
      "Tuples": 3541,
      "Placeholders": 364,
      "Dynamic": 420,
      "Input()": 540,
      "Interactive": 606,
      "Int()": 690,
      "Str()": 800,
      "Sequences": 1220,
      "Concatenation": 1283,
      "Addition": 1465,
      "Exponentiation": 1522,
      "Order": 1583,
      "Parentheses": 1623,
      "Equal": 1658,
      "Conditional Statements": 1682,
      "And": 1741,
      "Or": 1815,
      "Coding Exercises": 2201,
      "Indefinite": 2633,
      "Ordered Collections": 2780,
      "add": 2963,
      "Sort": 3075,
      "Iterate": 3132,
      "Predefined": 3274,
      "Sequence": 3370,
      "Immutable Sequences": 3520

   
  };
  

  // Check if selected text matches any section name
  useEffect(() => {
    console.log("in the useEfffect section, the seleted text and start time are :",selectedText," ",startTime);
    if (selectedText && sections[selectedText]) {

      setStartTime(sections[selectedText]);
      console.log("the start time is " + startTime);
    }else{
      setStartTime(0);
    }
  }, [selectedText, sections]);
  
  // Random quotes for the video section
  const quotes = [
    "Unlock the power of learning with video!",
    "Experience the joy of knowledge through video!",
    "Expand your horizons with captivating videos!",
    "Embark on a journey of discovery with video!",
    "Discover new insights and perspectives with video!",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = 'https://www.youtube.com/watch?v=kqtD5dpn9C8';
  const videoId=videoUrl.split('v=')[1];

  const opts = {
    height: '480px',
    width: '1142px',
    
    playerVars: {
      start: startTime,
      autoplay: 1, // Autoplay the video

    },
  };
  return (
    <div>
<Navbar/>
   

    <Container>
      
      <SectionHeading>Welcome to the Video Section</SectionHeading>
      <SectionHeading>{randomQuote}</SectionHeading>
      <p>Selected Text: {selectedText}</p>
      <p>The start time is : {sections[selectedText]} seconds</p>
      <p>Starting Time: {startTime} seconds</p>
      <StyledYouTube videoId={videoId} opts={opts}/>


      {/* <StyledReactPlayer
        url="https://www.youtube.com/watch?v=kqtD5dpn9C8" // Example YouTube video URL
        // url={require("../assets/images/videos/PythonVideo.mp4")}
        width="85%"
        height="500px"
        controls={true}  
        // playing={true} // Ensure the video doesn't start playing automatically
        playing={isPlaying}
        start={startTime}
        onReady={() => console.log('Video is ready',startTime)}
        /> */}

    </Container>
    </div>
  );
}

export default Video;
