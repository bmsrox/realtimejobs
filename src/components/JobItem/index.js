import { Link } from 'gatsby';
import React from 'react';

const JobItem = ({ jobid }) => {
  return (
    <Link to={`/job/${jobid}`}>
      <article className="w-full flex flex-col shadow my-4">
        <div className="bg-white flex flex-col justify-start p-6">
          <h1 className="text-2xl font-bold pb-3">Introduction</h1>
          <p className="pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="text-lg text-green-600 leading-tight mt-2 flex items-center">
          <div>
            <span>3 months ago </span>
          </div>
        </div>
        </div>
      </article>
    </Link>
  )
};

export default JobItem;
