import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Aplayer from './Aplayer';

import Navbar from '../Navbar';
const AudioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/18587787/pexels-photo-18587787/free-photo-of-corridor-in-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
const AudioContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AudioPlayer = styled.audio`
  margin-top: 20px;
`;

const StyledDiv = styled.div`
  margin-top: 100px;
  background-color: #f0f0f0;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const SwitchSectionDiv = styled.div`
  margin-top: 40px;
 
`;

const SwitchButton = styled(Link)`
  height: 50px; /* Adjust the height as needed */
  width: 100%; /* Make the button fill the entire width */

  background-color: green;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction:horizontal;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 20px; /* Add some margin for spacing */
`;

function Maudio() {

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const sections = {
    "Introduction": 0,
    "Introduction To Python": 0,
    "Python Basics": 30,
    "Control Flow": 60,
    "Strings": 1137,
    "Variables": 337,
    "Receiving Input": 569,
    "Type Conversions": 662,
    "Arithmetic Operators": 1157,
    "Operator Precedence": 1457,
    "Comparison Operator": 1573,
    "Logical Operators": 1688,
    "If Statements": 1776,
    "Exercise": 1887,
    "While loops": 2219,
    "Lists": 2566,
    "List Methods": 2760,
    "For Loops": 2977,
    "range()": 3186,
    "Tuples": 3382,
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);


  const [selectedText1, setSelectedText] = useState("");
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });

  const handleTextSelection = () => {
    const selection = window.getSelection();
    let selectedText1 = "";
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const startContainer = range.startContainer;
      const endContainer = range.endContainer;

      // Iterate over each character in the selected range
      let currentNode = startContainer;
      while (currentNode && currentNode !== endContainer.nextSibling) {
        if (currentNode.nodeType === Node.TEXT_NODE) {
          const text = currentNode.textContent;
          const startOffset =
            currentNode === startContainer ? range.startOffset : 0;
          const endOffset =
            currentNode === endContainer ? range.endOffset : text.length;
            selectedText1 += text.substring(startOffset, endOffset);
        }
        currentNode = currentNode.nextSibling;
      }
    }

    setSelectedText(selectedText1);
    const { x, y } = selection.getRangeAt(0).getBoundingClientRect();
    setSelectionPosition({ x, y });
    console.log("thisb is the seelcted text", selectedText1);
    // console.log("Selected text:", selectedText);
  };

  const openVideoPage = () => {
    // Logic to open another page, e.g., using React Router
    console.log("Opening another page with selected text:", selectedText1);
    const Text = selectedText1.toString();
    window.location.href = `/Video?selectedText=${encodeURIComponent(Text)}`;
  };

  const openAudioPage = () => {
    // Logic to open another page, e.g., using React Router
    console.log("Opening another page with selected text:", selectedText1);
    const Text = selectedText1.toString();
    window.location.href = `/Audio?selectedText=${encodeURIComponent(Text)}`;
  };
  const openDoubtPage = () => {
    // Logic to open another page, e.g., using React Router
    console.log("Opening another page with selected text:", selectedText1);
  };


  return (
    <div>
      <Navbar/>
      {/* <Aplayer/> */}

      <BookWrapper>
      <div className="ebook-page" onMouseUp={handleTextSelection}>
        <div className="book">
          <div className="cover">
            <h2>Python Learning</h2>
          </div>
          <div className="page">
            <div className="right-page">
              <div className="content">
                <h1
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "#f2a65a",
                      fontFamily: "sans-serif",
                      transition: "color 0.3s", // Add transition for smoother hover effect
                      // Add hover effect
                      ":hover": {
                        color: "#ffcc80", // Change color on hover
                        textShadow: "0 0 10px #ffcc80", // Add text shadow on hover
                        textDecoration: "underline", // Add underline on hover
                      },
                      // Add text outline
                      WebkitTextStroke: "1px black", // Text outline for Webkit browsers
                      textStroke: "1px black", // Text outline for other browsers
                    }}
                >
                  Python Learning

                </h1>

               {/* Add more chapters here */}
                {/* //ikkadnundi */}
                <div className="chapter">
                  <h4>11. Further Learning Resources</h4>
                  <ul>
                    <li>Online Documentation and Tutorials</li>
                    <li>Recommended Books</li>
                    <li>Coding Challenges and Exercises</li>
                    <li>Community Forums and Discussion Groups</li>
                  </ul>
                </div>
                <h3>Introduction to Python</h3>
                <p>
                  This chapter introduces Python, a high-level programming
                  language known for its simplicity and readability. We explore
                  the history of Python, including its origins and major
                  milestones. We discuss the reasons why learning Python is
                  valuable, such as its widespread use in various domains like
                  web development, data science, and artificial intelligence.
                  The chapter also covers practical aspects like installing
                  Python on different platforms and setting up a development
                  environment.
                </p>
                
                <h3>What can you do with Python</h3>
                <p>
                Python is not just a programming language; it's a versatile tool 
                that can be used for a wide range of applications.
                From web development to data science, artificial intelligence to automation,
                Python's flexibility makes it an invaluable asset in various domains
                </p>

                <h3>Python Basics:</h3>
                <p>
                  Here, we cover the fundamental building blocks of Python
                  programming, starting with{" "}
                  <strong>basic syntax and data types</strong>. We learn how to{" "}
                  <strong>
                    print output, declare variables, and use basic operators
                  </strong>{" "}
                  for arithmetic and logical operations. Topics include{" "}
                  
                    comments for code documentation, working with <strong>strings
                  </strong>
                  , and understanding different data structures like{" "}
                  <strong>lists, tuples, dictionaries, and sets</strong>.
                </p>

                <h3>Control Flow:</h3>
                <p>
                  This chapter delves into control flow statements, which allow
                  us to control the execution of code based on certain
                  conditions. We explore conditional statements like if, elif,
                  and else, as well as looping constructs such as for and while.
                  Additionally, we cover how to use break and continue
                  statements to modify the flow of loops, and the pass statement
                  for placeholder code blocks.
                </p>

                <h3>Functions:</h3>
                <p>
                  <strong>Functions</strong> are essential for organizing and
                  reusing code. In this chapter, we learn how to define
                  functions, pass parameters, and return values. We discuss the
                  concept of scope in Python, distinguishing between local and
                  global <strong>variables</strong>. Examples demonstrate how to create and call
                  functions, as well as handle different scenarios like function
                  overloading and recursion.
                </p>

                <h3>Data Structures and Built-in Functions:</h3>
                <p>
                  <strong>Data structures</strong> are fundamental for
                  organizing and manipulating data efficiently. We explore how
                  to work with lists, tuples, dictionaries, and sets in Python.
                  List comprehensions are introduced as a concise way to create
                  lists based on existing ones. We also cover various{" "}
                  <strong>built-in functions</strong> provided by Python for
                  common tasks like finding the length of a sequence,
                  calculating the maximum or minimum value, and performing
                  aggregation operations.
                </p>

                <h3>File Handling:</h3>
                <p>
                  File handling is crucial for interacting with external files.
                  This chapter covers how to open, read from, and write to files
                  in Python. Context managers, especially the with statement,
                  are introduced as a cleaner way to manage file resources and
                  ensure proper handling of file operations. Error Handling:
                  Errors are inevitable in programming, but Python provides
                  mechanisms for handling them gracefully. This chapter explores
                  exception handling using try, except, and finally blocks. We
                  learn how to catch specific exceptions and raise custom
                  exceptions when necessary.
                </p>

                <h3>Object-Oriented Programming (OOP):</h3>
                <p>
                  <strong>Object-oriented programming</strong> is a powerful
                  paradigm for structuring code. This chapter introduces classes
                  and objects, the building blocks of OOP. Concepts like
                  inheritance, encapsulation, and polymorphism are explained
                  with practical examples to illustrate their usage in Python.
                  Modules and Packages: Python's modular design
                </p>

                <h3>Variables</h3>
                <p>Variables in Python serve as <strong>placeholders</strong> for storing data values.
                   Unlike some other programming languages, Python does not require you
                    to declare the data type of a variable explicitly; instead, it
                    dynamically determines the type based on the assigned value.
                    This <strong>dynamic</strong> typing feature allows for greater flexibility and simplicity when 
                    working with variables in Python.
                </p>

                <h3>Receiving Input</h3>
                <p>Interacting with users is a common requirement in many applications.
                  Python provides the <strong>input()</strong> function, which allows you to prompt the user for 
                  input and store the entered value in a variable. By combining input() with appropriate prompts 
                  and validation logic, you can create <strong>interactive</strong> programs that respond to user 
                  input in meaningful ways.
                </p>

                <h3>Type Conversion</h3>
                <p>
                Python provides built-in functions for converting data from one type to another. 
                For example, you can use the <strong>int()</strong> function to convert a string containing a numerical value 
                into an integer, or the <strong>str()</strong> function to convert a numerical value into a string. 
                These type conversion functions are invaluable when working with mixed data types or when 
                converting user input into the required format for processing.
                </p>

                <h3>Strings</h3>
                <p>
                Strings are <strong>sequences</strong> of characters enclosed within single quotes, double quotes, or triple 
                quotes in Python. Python offers a rich set of operations and methods for working with strings, 
                including <strong>concatenation</strong>, slicing, formatting, and searching. Whether you're manipulating text data,
                parsing user input, or generating dynamic output, Python's string handling capabilities 
                make it easy to work with textual data.
                </p>

                <h3>Arithmetic Operators</h3>
                <p>
                Python supports a variety of arithmetic operators for performing mathematical operations on
                 numerical data. <strong>Addition</strong> (+), subtraction (-), multiplication (*), division (/), and 
                 <strong>exponentiation</strong> (**) are some of the basic arithmetic operators available in Python. 
                 These operators can be used to perform calculations ranging from simple arithmetic to 
                 complex mathematical expressions.
                </p>
                
                <h3>Operator Precedence</h3>
                <p>Operator precedence determines the <strong>order</strong> in which operations are evaluated in an expression.
                In Python, arithmetic operators have precedence over logical operators, and <strong>parentheses</strong> 
                can be used to override the default precedence. Understanding operator precedence is essential 
                for writing correct and predictable code, especially when dealing with complex expressions 
                involving multiple operators.
                </p>

                <h3>Comparision Operators</h3>
                <p>Comparison operators are used to compare two values and determine their relationship. 
                Python provides a variety of comparison operators, including <strong>equal to</strong> (==), not equal to (!=), 
                greater than (&gt;), less than (&lt;), greater than or equal to (&gt;=), and less than or equal to (&lt;=).
                These operators are used in <strong>conditional statements</strong> and expressions to control the flow of a program
                based on specific conditions.
                </p>

                <h3>Logical Operators</h3>
                <p>
                Logical operators are used to combine multiple conditions and determine the overall truth value 
                of a compound expression. Python supports three logical operators: <strong>and</strong>, <strong>or</strong>, and not. These operators 
                allow you to build complex conditions by combining simpler conditions using logical AND, OR, and 
                NOT operations.
                </p>

                <h3>If Statements</h3>
                <p>
                If statements are used to execute a block of code if a specified condition is true. Python 
                supports the if, elif, and else keywords for implementing <strong>conditional logic</strong>. By using if 
                statements, you can create programs that make decisions based on different conditions, 
                allowing for greater flexibility and control over program flow.
                </p>

                <h3>Exercise</h3>
                <p>
                Practicing <strong>coding exercises</strong> is an essential part of learning Python. Exercises help reinforce 
                your understanding of Python concepts and provide an opportunity to apply them in real-world 
                scenarios. Whether you're a beginner looking to solidify your grasp of the basics or an 
                experienced developer honing your skills, regular practice with exercises is key to mastering 
                Python programming.
                </p>

                <h3>While Loops</h3>
                <p>
                <strong>While loops</strong> are used to repeatedly execute a block of code as long as a specified condition 
                remains true. Unlike for loops, which iterate over a predefined sequence, while loops continue 
                iterating until the condition becomes false. While loops are useful for tasks that require
                <strong> indefinite repetition</strong>, such as reading input until a specific condition is met or implementing 
                algorithms that require iterative refinement.
                </p>

                <h3>Lists</h3>
                <p>
                Lists are <strong>ordered collections</strong> of items in Python, enclosed within square brackets and separated 
                by commas. Lists can contain elements of different data types, and they support indexing and 
                slicing operations for accessing and manipulating individual elements. Lists are mutable, 
                meaning you can modify their contents after creation, making them versatile data structures 
                for storing and processing data.
                </p>

                <h3>List Methods</h3>
                <p>
                Python provides a variety of built-in methods for working with lists. These methods allow 
                you to <strong>add</strong> or remove elements, <strong>sort</strong> the list, search for specific items, and more. By 
                leveraging these list methods, you can perform common list operations efficiently and effectively, 
                reducing the need for manual iteration and manipulation.
                </p>

                <h3>For Loops</h3>
                <p>
                For loops are used to <strong>iterate</strong> over a sequence of items in Python. Unlike while loops, which 
                require an explicit condition for termination, for loops iterate over a <strong>predefined sequence</strong> 
                until all elements have been processed. For loops are commonly used with sequences like lists, 
                tuples, and strings, allowing you to perform operations on each element in the sequence 
                without the need for manual iteration.
                </p>

                <h3>The range Function</h3>
                <p>
                The range() function is used to generate a <strong>sequence of numbers</strong> in Python. It takes start, 
                stop, and step parameters and returns a sequence of integers from start to stop-1, incrementing 
                by step each time. The range() function is commonly used in conjunction with for loops to iterate 
                over a specific range of numbers or to generate custom sequences for various purposes.
                </p>

                <h3>Tuples</h3>
                <p>
                Tuples are <strong>immutable sequences</strong> of elements in Python, similar to lists but with one key 
                difference: once created, the elements of a tuple cannot be modified. Tuples are defined 
                using parentheses and can contain elements of different data types. Tuples are often used 
                to represent fixed collections of items, such as coordinates, settings, or records, where 
                immutability is desired.
                </p>
              </div>
            </div>
          </div>
        </div>

        {selectedText1 && (
          <div
            className="selection-options"
            style={{
              
              position: "absolute",
              marginTop:25,
              marginLeft:30,
              height: "250px",
              width: "250px",
              top: selectionPosition.y + window.scrollY + "px",
              left: selectionPosition.x + "px",
              backgroundColor: "#f2a65a",
              border: "1px solid grey",
              padding: "7px",
              borderRadius: "5px",
              fontSize: "15px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <button onClick={openVideoPage}>
              <br></br>
              <ul >Switch to Video Section</ul>
              <br></br>
            </button>
            <hr />
            <button onClick={openAudioPage}>
              <br></br>
              <ul>Switch to Audio Section</ul>
              <br></br>
            </button>
            <hr />
            <button onClick={openDoubtPage}>
              <br></br>
              <ul>Switch to Doubt Chat</ul>
            </button>
            {/* <hr /> */}
          </div>
        )}
      </div>
    </BookWrapper>


    <AudioWrapper>

      <StyledDiv>
        <h1>This is the Audio Section</h1>
        <hr/>
        <AudioPlayer ref={audioRef} controls onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}>
          <source src="/PythonAudio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </AudioPlayer>
        <SwitchSectionDiv>
          <h3>Switch to any other Format?</h3>
          <hr/>
          <SwitchButton to={`/Avideo?selectedText=${currentTime}`}>Open the Video Format</SwitchButton>
          <SwitchButton to="/Book">Open the Book Format</SwitchButton>
        </SwitchSectionDiv>
      </StyledDiv>
    </AudioWrapper>
    </div>
  );
}


const BookWrapper = styled.div`
  .book {
    margin: 50px;
    // width: 80%;
    height: 100vh;

    background-color: #f2a65a;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    // display: flex;
    // justify-content: center;
    // align-items: center;
  }

  .cover {
    background-color: #f2a65a;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .cover h2 {
    font-size: 24px;
    color: black;
    text-align: center;
  }

  .page {
    padding: 20px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
  }

  .left-page,
  .right-page {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    // justify-content: center;
    align-items: center;
  }

  .content {
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .chapter {
    margin-bottom: 20px;
  }

  .chapter h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding-left: 20px;
  }

  ul li {
    margin-bottom: 5px;
  }
`;


export default Maudio;
