import React from 'react';
import Helmet from 'react-helmet';
import JobItem from '../JobItem';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Realtime Jobs</title>
      </Helmet>

      <section className="w-full mx-auto bg-nordic-gray-light flex pt-16 md:pt-0 md:items-center h-64">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl my-4 text-center">Stripy Zig Zag Jigsaw Pillow and Duvet Set</h1>
          <div className="relative text-center">
            <input type="search" placeholder="Search" className="bg-gray-900 text-3xl text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal" />
          </div>
        </div>      
      </section>

      <section className="w-full mx-auto bg-nordic-gray-light flex pt-16 md:pt-0 md:items-center py-2">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <JobItem />
        </div>
      </section>
    </>
  )
};

export default Home;
