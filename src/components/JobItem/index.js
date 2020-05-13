import { Link } from 'gatsby';
import React from 'react';

const JobItem = ({ job }) => {
  
  const publishedAt = new Date(job.createdAt).toLocaleString()

  return (
    <Link to={`/job/${job.id}`}>
      <article className="w-full flex flex-col shadow my-4">
        <div className="bg-white flex flex-col justify-start p-6">
          <h1 className="text-2xl font-bold pb-3">{ job.title }</h1>
          <p className="pb-3">
            { job.description }
          </p>
          <div className="text-lg text-green-600 leading-tight mt-2 flex items-center">
          <div>
            <span> { publishedAt } </span>
          </div>
        </div>
        </div>
      </article>
    </Link>
  )
};

export default JobItem;
