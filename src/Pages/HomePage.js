import React from 'react';
import Hero from "../Components/Hero";
import CoursesList from "../Components/CourseList";
import CategoriesList from "../Components/CategoriesList";
import Yt from '../Components/Yt';
import Navbar from '../Components/Navbar';
const HomePage = () => {
  return (
    
    <div className='holder'>
      <Navbar/>
      <Hero/>
      <CoursesList />
      <CategoriesList />
      {/* <Yt /> */}

    </div>
  )
}

export default HomePage