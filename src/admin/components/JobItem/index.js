import { Link } from 'gatsby';
import React from 'react';

const JobItem = ({ jobid }) => {
  return (
    <div className="w-full flex flex-wrap shadow p-4 mb-6 bg-gray-900 border border-gray-800 rounded shadow p-4">
      <div className=" flex flex-col w-5/6">
        <div className="text-2xl font-bold text-gray-400 my-2">
          How To Add Advanced Photo Uploads in Node and Express
        </div>
        <div className="text-lg text-green-600 leading-tight mt-2 flex items-center">
          <div>
            <span>3 months ago </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
          <Link to={`/admin/post/${jobid}`} className="py-1 px-2 mx-2 bg-blue-600 text-white rounded">Edit</Link>
          <button className="py-1 px-2 mx-2 bg-red-600 text-white rounded">Delete</button>
      </div>
    </div>
  )
};

export default JobItem;
