import React from 'react';
import ScrollingText from '../components/scrollingText';

const Alert = () => {
  return (
    <div className='flex justify-center'>
    <div className='lg:w-[50%]'>
      {/* <h1>Your Next.js Tailwind CSS App</h1> */}
      <ScrollingText text="Registrations close at 11:59 pm TONIGHT!!!" 
      className="text-white text-lg lg:text-xl hsmall font-extrabold tracking-wider" />
    </div>
    </div>
  );
};

export default Alert;