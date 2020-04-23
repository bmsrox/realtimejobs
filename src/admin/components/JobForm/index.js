import React from 'react';
import { Error, Success } from '../../../components/Messages';

const JobForm = () => {
  const error = false
  const success = false
  const onChange = (e) => {

  }
  return (
    <div className='items-center text-gray-600 justify-center px-2 py-4'>
      <form method="post">
        {success && <Success message="Job post has been saved." />}

        {!success && <>
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='title'

            onChange={onChange}
            placeholder='Title' />
          <textarea
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='description'
            value={''}
            onChange={onChange}
            placeholder='Description'> </textarea>
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='skills'

            onChange={onChange}
            placeholder='Skills (e.g: Motivated, Hard Work, Excel)' />
          <select
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='category'
            onChange={onChange}>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
          </select>
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='salary'

            onChange={onChange}
            placeholder='Salary' />
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='company'

            onChange={onChange}
            placeholder='Company' />

          {error && <Error message={error} />}

          <div className="text-center">
            <button
              className='w-1/2 text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'
            >Save</button>
          </div>
        </>
        }
      </form>
    </div>
  )
};

export default JobForm;
