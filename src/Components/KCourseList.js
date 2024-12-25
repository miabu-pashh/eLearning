import React from 'react';
import styled from "styled-components";
import KTabs from "./KTabs";
import { useCoursesContext } from '../Context/courses_context';

const KCourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>Discover Fun Learning!</h2>
          <p>Explore over 200 fun courses - from science experiments to art creations!</p>
        </div>

        <KTabs courses = {courses} />
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default KCourseList