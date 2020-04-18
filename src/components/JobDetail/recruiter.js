import React from 'react';

const Recruiter = () => {
  return (
    <div class="w-full shadow flex flex-col my-4 p-6 bg-gray-900 border border-gray-800 rounded shadow p-4">
      <div class="flex justify-center md:justify-center pb-4">
        <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" class="rounded-full shadow h-32 w-32" />
      </div>

      <div class="flex-1 flex flex-col justify-center md:justify-center">
        <p class="font-semibold text-center text-2xl">David</p>
        <p class="pt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna.</p>
      </div>

      <a href="#" class="w-full bg-green-600 text-white font-bold text-sm uppercase rounded hover:bg-green-500 flex items-center justify-center px-2 py-3 mt-4">
        Apply
                </a>
    </div>
  )
};

export default Recruiter;
