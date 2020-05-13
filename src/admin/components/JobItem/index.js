import { Link } from 'gatsby';
import React from 'react';
import { deleteJob } from '../../../service/jobs';

const JobItem = ({ job }) => {
  
  return (
    <article className="w-full bg-white flex flex-wrap shadow p-4 mb-6 border rounded shadow p-4">
      <div className=" flex flex-col w-5/6">
        <div className="text-2xl font-bold text-gray-600 my-2">
          { job.title } ({ job.company })
        </div>
      </div>
      <div className="flex items-center">
          <Link to={`/admin/post/${job.id}`} className="py-1 px-2 mx-2 bg-blue-600 text-white rounded">Edit</Link>
          <button onClick={() => deleteJob(job.id)} className="py-1 px-2 mx-2 bg-red-600 text-white rounded">Delete</button>
      </div>
    </article>
  )
};

export default JobItem;
