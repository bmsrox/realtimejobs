import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import JobItem from '../components/JobItem';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>      
      <section className="w-full mx-auto bg-nordic-gray-light flex pt-16 md:pt-0 md:items-center h-56">
        <div className="container mx-auto">
          <div className="text-center">
            <Link to="/admin/post" className='font-bold text-xl text-center px-20 py-6 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'>
              Post a new Job
            </Link>
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

export default Dashboard;
