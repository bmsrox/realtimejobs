import { Link, navigateTo } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import firebase from '../../firebase';
import Layout from '../components/Layout';
import { Error } from '../components/Messages';
import PageContainer from '../components/PageContainer';
import { inputChange } from '../lib/events';

const SignIn = () => {

  const [error, setError] = React.useState('')
  const [signInForm, setSignInForm] = React.useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    inputChange(e, setSignInForm, setError);
  }

  const signIn = (e) => {
    e.preventDefault();
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

      <PageContainer>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 text-white w-full border rounded shadow p-4'>
            <h1 className='mb-8 text-3xl text-gray-800 text-center'>Sign In</h1>
            <form method="post" onSubmit={signIn}>
              <input
                type='text'
                className='w-full mb-4 block text-gray-600 transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
                name='email'
                value={signInForm.email}
                onChange={onChange}
                placeholder='Email' />
              <input
                type='password'
                className='w-full mb-4 block text-gray-600 transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
                name='password'
                value={signInForm.password}
                onChange={onChange}
                placeholder='Password' />

              { error && <Error message={error} />}              

              <button
                type="submit"
                className='w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'
              >Sign In</button>
            </form>
          </div>
          <div className='text-grey-dark mt-6'>
             <Link 
              to='/forgot-password'
              className='no-underline border-b border-blue text-blue'>
              I forgot my password.
            </Link>
          </div>
        </div>
      </PageContainer>
    </Layout>
  )
};

export default SignIn;
