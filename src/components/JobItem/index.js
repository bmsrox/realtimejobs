import { Link } from 'gatsby';
import React from 'react';

const JobItem = ({ jobid }) => {
  return (
    <Link to={`/job/${jobid}`}>
    <div className="mb-6 bg-gray-900 border border-gray-800 rounded shadow p-4">
      <div className="text-2xl font-bold text-gray-400 my-2">
        How To Add Advanced Photo Uploads in Node and Express
      </div>
      <div className="text-xl text-gray-600 leading-tight my-1">
        In this tutorial, we will see how to upload a photo to an Express app and manipulate it (resize, crop, greyscale, etc) before writing it to storage.
      </div>
      <div className="text-lg text-green-600 leading-tight mt-2 flex items-center">
        <div>
          <span>3 months ago </span> • <span>By Glad Chinda</span>
        </div>
        <div className="ml-2">
          <span className="py-1 px-2 mx-2 bg-gray-300 text-green-600 rounded">Ubuntu 18.04</span>
          <span className="py-1 px-2 mx-2 bg-gray-300 text-green-600 rounded">Flask</span>
        </div>
      </div>
    </div>
    </Link>
  )
};

export default JobItem;
