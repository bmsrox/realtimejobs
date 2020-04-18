import React, { useState } from 'react';
import Helmet from 'react-helmet';
import firebase from '../../firebase';
import Layout from '../components/Layout';
import { Error, Success } from '../components/Messages';
import { inputChange } from '../lib/events';


const ForgotPassword = () => {

  const [success, setSucces] = useState(false)
  const [error, setError] = useState('')
  const [forgetForm, setForgetForm] = useState({
    email: ''
  })

  const onChange = (e) => {
    inputChange(e, setForgetForm, setError);
  }

  const resetPassword = async (e) => {

    e.preventDefault()
    setError('')
    try {
      const auth = firebase.auth();
      await auth.sendPasswordResetEmail(forgetForm.email)
      setSucces(true)
      setForgetForm({
        email: ''
      })
    } catch (error) {
      setError(error.message)
      setSucces(false)
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className='bg-grey-lighter min-h-screen flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='px-6 py-2 bg-gray-900 border border-gray-800 rounded shadow p-4 w-full'>
            <h1 className='mb-8 text-3xl text-white text-center'>Forgot Password</h1>
            <form method="post" onSubmit={resetPassword}>
              <input
                type='text'
                className='w-full bg-gray-900 mb-4 block text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
                name='email'
                value={forgetForm.email}
                onChange={onChange}
                placeholder='Email' />

              { success && <Success message="Email has been sent!" />}
              { error && <Error message={error} />}

              <button
                type="submit"
                className='w-full text-center py-3 rounded bg-red-600 text-white hover:bg-red-500 focus:outline-none my-1'
              >Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default ForgotPassword;
