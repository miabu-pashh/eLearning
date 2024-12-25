import React, {useState} from 'react';
import styled from "styled-components";
import Course from "./Course";
import {MATH, SCIENCE, ARTS_CRAFTS, STORY_TIME, BASIC_CODING, NATURE_EXPLORATION} from "../utils/constants";
import courses from '../utils/Kdata';

const KTabs = () => {
  const [activeTab, setActiveTab] = useState(MATH); 
  const tabHandler = (category) => {
    setActiveTab(category);
  }

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === MATH}`} onClick = {() => tabHandler(MATH)}>Math Fun</button>
          </li>
          <li className='tabs-head-item1'>
            <button type = "button" className={`tab-btn ${activeTab === SCIENCE}`} onClick = {() => tabHandler(SCIENCE)}>Science Adventures</button>
          </li>
          <li className='tabs-head-item2'>
            <button type = "button" className={`tab-btn ${activeTab === ARTS_CRAFTS}`} onClick = {() => tabHandler(ARTS_CRAFTS)}>Arts & Crafts</button>
          </li>
          <li className='tabs-head-item3'>
            <button type = "button" className={`tab-btn ${activeTab === STORY_TIME}`} onClick = {() => tabHandler(STORY_TIME)}>Story Time</button>
          </li>
          <li className='tabs-head-item4'>
            <button type = "button" className={`tab-btn ${activeTab === BASIC_CODING}`} onClick = {() => tabHandler(BASIC_CODING)}>Basic Coding</button>
          </li>
          <li className='tabs-head-item5'>
            <button type = "button" className={`tab-btn ${activeTab === NATURE_EXPLORATION}`} onClick = {() => tabHandler(NATURE_EXPLORATION)}>Nature Exploration</button>
          </li>
        </ul>

        <div className='tabs-body'>
          {
            courses.filter(course => course.category === activeTab).map((course) => (
              <Course key = {course.id} {...course} />
            ))
          }
        </div>
      </div>
    </TabsWrapper>
  )
}

const TabsWrapper = styled.div`
  .tabs{
    margin-top: 16px;
    .tabs-head-item button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: #bdb2ff ; /* Primary color from theme, could be a bright kid-friendly color */
        color: black;
      }
    }
    margin-top: 16px;
    .tabs-head-item1 button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: #ffadad; /* Primary color from theme, could be a bright kid-friendly color */
        color: black;
      }
    }
    margin-top: 16px;
    .tabs-head-item2 button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: #fdffb6; /* Primary color from theme, could be a bright kid-friendly color */
        color: black;
      }
    }
    margin-top: 16px;
    .tabs-head-item3 button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: #9bf6ff; /* Primary color from theme, could be a bright kid-friendly color */
        color: black;
      }
    }
    margin-top: 16px;
    .tabs-head-item4 button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: #caffbf; /* Primary color from theme, could be a bright kid-friendly color */
        color: black;
      }
    }
    margin-top: 16px;
    .tabs-head-item5 button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: #bdb2ff; /* Primary color from theme, could be a bright kid-friendly color */
        color: black;
      }
    }

    .tabs-body{
      margin-top: 32px;
    }

    @media screen and (min-width: 600px){
      .tabs-body{
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px){
      .tabs-body{
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px){
      .tabs-body{
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default KTabs
