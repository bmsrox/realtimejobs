import React, { useState } from 'react';
import Helmet from 'react-helmet'
import { navigateTo, Link } from 'gatsby'

import firebase from '../lib/firebase'
import Layout from '../components/Layout';
import { Error } from '../components/Messages'
import { inputChange } from '../lib/events'

const SignUp = () => {

  const [error, setError] = useState('')
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })

  const onChange = (e) => {
    inputChange(e, setSignUpForm, setError);
  }

  const signUp = () => {
    setError('')
    const { password, confirm_password } = signUpForm

    if (password.length < 6 && password === confirm_password) {
      return setError('Password must be at least 6 characters long.')
    } else if (password !== confirm_password) {
      return setError('Password does not match!')
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
      .then(() => navigateTo('/admin'))
      .catch(error => setError(error.message)
      );
  }

  return (
    <Layout>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className='bg-grey-lighter min-h-screen flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center'>Sign up</h1>
            <input
              type='text'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='email'
              value={signUpForm.email}
              onChange={onChange}
              placeholder='Email' />
            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='password'
              value={signUpForm.password}
              onChange={onChange}
              placeholder='Password' />
            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-4 '
              name='confirm_password'
              value={signUpForm.confirm_password}
              onChange={onChange}
              placeholder='Confirm Password' />

            { error && <Error message={error} />}              

            <button
              onClick={signUp}
              className='w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'
            >Create Account</button>
            <div className='text-center text-sm text-grey-dark mt-4'>
              By signing up, you agree to the <a className='no-underline border-b border-grey-dark text-grey-dark' href='#'>
                Terms of Service 
              </a> and <a className='no-underline border-b border-grey-dark text-grey-dark' href='#'>
                Privacy Policy
              </a>
            </div>
          </div>
          <div className='text-grey-dark mt-6'>
            Already have an account? <Link 
              to='/signin'
              className='no-underline border-b border-blue text-blue'>
              Log in
            </Link>.
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default SignUp;
