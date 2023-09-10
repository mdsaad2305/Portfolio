import React from 'react';

const Home = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-left">
        <p className='text-4xl mb-4'>Hi, my name is</p>
        <h1 className='text-8xl font-bold mb-4' style={{ fontFamily: 'Dancing Script, cursive' }}>Mohammed Saad</h1>
        <h2 className='text-6xl font-bold mb-6 text-blue-400'>I am a Full Stack Developer</h2>
        <p className="text-lg mb-32">
          I am a dedicated third-year Computer Science major, fueled by a strong aspiration to excel
          <br></br>
          as a future Full Stack Software Engineer at the esteemed University of Guelph.
        </p>
      </div>
    </section>
  );
};

export default Home;
