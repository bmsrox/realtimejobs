import React, { useState } from 'react';
import Helmet from 'react-helmet'
import { navigateTo, Link } from 'gatsby'

import firebase from '../lib/firebase'
import Layout from '../components/Layout';
import { Error } from '../components/Messages'
import { inputChange } from '../lib/events'


const SignIn = () => {

  const [error, setError] = useState('')
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    inputChange(e, setSignInForm, setError);
  }

  const signIn = () => {
    setError('')
    const { email, password } = signInForm

    if (password.length < 6) {
      return setError('Password must be at least 6 characters long.')
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigateTo('/admin'))
      .catch(error => setError(error.message));
  }

  return (
    <Layout>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className='bg-grey-lighter min-h-screen flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center'>Sign In</h1>
            <input
              type='text'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='email'
              value={signInForm.email}
              onChange={onChange}
              placeholder='Email' />
            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='password'
              value={signInForm.password}
              onChange={onChange}
              placeholder='Password' />

            { error && <Error message={error} />}              

            <button
              onClick={signIn}
              className='w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'
            >Sign In</button>
          </div>
          <div className='text-grey-dark mt-6'>
             <Link 
              to='/forgot-password'
              className='no-underline border-b border-blue text-blue'>
              I forgot my password.
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default SignIn;
