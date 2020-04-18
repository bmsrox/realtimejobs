import React from 'react';
import { Helmet } from 'react-helmet';
import JobForm from '../components/JobForm';


const Post = ({ isNewRecord, jobid }) => {

  const title = isNewRecord ? 'Post a Job' : `Edit Job #${jobid}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container mx-auto py-6">
        <section className="w-full mx-auto bg-nordic-gray-light flex pt-16 md:pt-0 md:items-center h-24">
          <div className="container mx-auto">
            <h1 className="text-white text-3xl font-bold my-4 text-center"> {title} </h1>
          </div>
        </section>
        <section className="w-full flex flex-col items-center my-4 px-3 bg-gray-900 border border-gray-800 rounded shadow p-4">
            <JobForm />
        </section>
      </div>
    </>
  )
};

export default Post;
