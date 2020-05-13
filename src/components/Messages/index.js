import React from 'react';

export const Error = ({ message }) => {
  return (
    <div className="flex items-center bg-red-500 text-white mb-3 text-sm font-bold px-4 py-3" role="alert">
      <p>{message}</p>
    </div>
  )
}

export const Success = ({ message }) => {
  return (
    <div className="flex items-center bg-green-500 text-white mb-3 text-sm font-bold px-4 py-3" role="alert">
      <p>{message}</p>
    </div>
  )
}