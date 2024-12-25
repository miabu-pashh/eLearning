import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const KHero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Welcome to Fun Learning!</h1>
          <p>Discover exciting courses for kids - from arts to science! Start your adventure today.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 400px;

  .container{
    .hero-content{
      background-color: #f0f8ff; /* light azure to give a gentle, kid-friendly look */

      max-width: 500px;
      width: 100%;
      margin-top: 30px;
      margin-left: 200px;
      padding: 30px;
      border-radius: 15px; /* Rounded corners for a softer look */
      box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Soft shadow for depth */

      h1{
        font-size: 28px; /* slightly reduced font size for simplicity */
        margin-bottom: 5px;
        white-space: nowrap;
        color: #4a90e2; /* bright blue for a fun and engaging color */
      }
      p{
        font-size: 14px; /* smaller text size */
        color: #333; /* darker color for better readability */
      }
    }
  }
`;

export default KHero;
