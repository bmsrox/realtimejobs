import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../components/PageContainer';
import JobForm from '../components/JobForm';

const Post = ({ isNewRecord, jobid }) => {

  const title = isNewRecord ? 'Post a Job' : `Edit Job #${jobid}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
     
      <PageContainer>
        <div className='container md:w-2/3 mx-auto flex-1 flex flex-col items-center justify-center px-2'>
            <div className='bg-white px-6 py-8 border  rounded shadow p-4 w-full'>
              <h1 className='mb-8 text-3xl text-gray-800 text-center'>{title}</h1>
              <JobForm isNewRecord={isNewRecord} jobid={jobid} />
          </div>
        </div>
      </PageContainer>
    </>
  )
};

export default Post;
