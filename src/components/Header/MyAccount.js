import React from 'react';
import { Link } from 'gatsby'

const MyAccount = ({ signOut }) => {
  return (
    <div className="dropdown inline-block relative">
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ml-4">
        <span>My Account</span>
      </button>
      <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
        <li>
          <Link
            to='/admin'
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Home
            </Link>
        </li>
        <li>
          <Link
            to='/admin/password'
            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Change Password
          </Link>
        </li>
        <li>
          <a
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            onClick={signOut}>
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MyAccount;
