import React, { useState } from 'react';
import Helmet from 'react-helmet'
import firebase from '../lib/firebase'

import Layout from '../components/Layout'
import { Success, Error } from '../components/Messages'
import { inputChange } from '../lib/events'

const ForgotPassword = () => {

  const [success, setSucces] = useState(false)
  const [error, setError] = useState('')
  const [forgetForm, setForgetForm] = useState({
    email: ''
  })

  const onChange = (e) => {
    inputChange(e, setForgetForm, setError);
  }

  const resetPassword = async () => {
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
          <div className='bg-white px-6 py-2 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center'>Forgot Password</h1>
            <input
              type='text'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='email'
              value={forgetForm.email}
              onChange={onChange}
              placeholder='Email' />

            { success && <Success message="Email has been sent!" />}
            { error && <Error message={error} />}

            <button
              onClick={resetPassword}
              className='w-full text-center py-3 rounded bg-red-600 text-white hover:bg-red-500 focus:outline-none my-1'
            >Reset Password</button>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default ForgotPassword;
