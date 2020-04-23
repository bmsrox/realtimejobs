import React from 'react';
import Helmet from 'react-helmet';
import JobItem from '../JobItem';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Realtime Jobs</title>
      </Helmet>

      <PageHeader>
          <a className="font-bold text-gray-800 uppercase text-5xl" href="#">
            Minimal Blog
          </a>
          <div className="flex flex-col items-center px-3 w-full text-center">
            <input type="text" placeholder="Search" className="w-full md:w-3/5 bg-white text-3xl text-gray-600 transition border border-gray-400 focus:outline-none focus:border-gray-600 rounded p-2 mb:p-4" />
          </div>
      </PageHeader>

      <PageContainer>
        <section className="w-full px-3">
          <JobItem />
          <JobItem />
          <JobItem />
        </section>
      </PageContainer>
    </>
  )
};

export default Home;
