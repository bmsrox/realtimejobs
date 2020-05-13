import React from 'react';
import { Error } from '../../../components/Messages';
import { useAuth } from '../../../lib/AuthContext';
import { inputChange } from '../../../lib/events';
import { createJob, findJobById, updateJob } from '../../../service/jobs';

const initialState = {
  title: '',
  description: '',
  skills: '',
  company: '',
  salary: '',
  category: '',
  createdAt: '',
  createdBy: ''
}

const JobForm = ({ isNewRecord, jobid }) => {
  
  const auth = useAuth()
  const [error, setError] = React.useState('')
  const [job, setJob] = React.useState(initialState)

  React.useEffect(() => {
    if (!isNewRecord) {
      async function loadJob() {
        setJob(await findJobById(jobid))
      }
      loadJob()
    }
  }, [])

  const onChange = (e) => {
    inputChange(e, setJob, setError)
  }

  const createPostJob = () => {
    createJob({
      ...job,
      createdBy: auth.uid
    })
    .then(() => setJob(initialState))
    .catch(error => setError(error.message))
  }

  const updatePostJob = () => {
    updateJob(jobid, job)
      .then(() => setJob(initialState))
      .catch(error => setError(error.message))
  }

  const savePostJob = (e) => {
    e.preventDefault()
    setError('')
    return isNewRecord ? createPostJob() : updatePostJob()
  }

  return (
    <div className='items-center text-gray-600 justify-center px-2 py-4'>
      <form method="post" onSubmit={savePostJob}>
          {error && <Error message={error} />}
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='title'
            value={job.title}
            onChange={onChange}
            placeholder='Title' />
          <textarea
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='description'
            value={job.description}
            onChange={onChange}
            placeholder='Description'> </textarea>
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='skills'
            value={job.skills}
            onChange={onChange}
            placeholder='Skills (e.g: Motivated, Hard Work, Excel)' />
          <select
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='category'
            value={job.category}
            onChange={onChange}>
              <option>Select an option</option>
              <option value='Category 1'>Category 1</option>
              <option value='Category 2'>Category 2</option>
              <option value='Category 3'>Category 3</option>
          </select>
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='salary'
            value={job.salary}
            onChange={onChange}
            placeholder='Salary' />
          <input
            type='text'
            className='w-full mb-4 block transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
            name='company'
            value={job.company}
            onChange={onChange}
            placeholder='Company' />

          <div className="text-center">
            <button
              type='submit'
              className='w-full md:w-1/5 text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'
            >Save</button>
          </div>
      </form>
    </div>
  )
};

export default JobForm;
