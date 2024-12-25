import React from 'react';
import KHero from "../Components/KHero";
import KCoursesList from "../Components/KCourseList";
import CategoriesList from "../Components/CategoriesList";
import Navbar from '../Components/Navbar';

const KHomePage = () => {
  return (
    <div className='holder'>
      <Navbar/>
      <KHero />
      <KCoursesList />
      <CategoriesList />
    </div>
  )
}

export default KHomePage