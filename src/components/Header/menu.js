import { Link } from 'gatsby';
import React from 'react';

const Menu = ({ signOut, username }) => {
  return (
    <div className="dropdown rounded inline-block relative">
      <button className="flex items-center focus:outline-none py-1">
        <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of User" /> 
        <span className="hidden md:inline-block">Hi, { username } </span>
        <svg className="pl-2 h-2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xlink="http://www.w3.org/1999/xlink">
          <g>
            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
          </g>
        </svg>
      </button>
      <ul className="dropdown-content bg-gray-900 absolute hidden text-gray-100">
        <li>
          <Link
            to='/admin'
            className="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap">
            Home
            </Link>
        </li>
        <li>
          <Link
            to='/admin/password'
            className="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap">
            Change Password
          </Link>
        </li>
        <li>
          <hr className="border-t mx-2 border-gray-400" />
        </li>
        <li>
          <a
            className="hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
            onClick={signOut}>
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
