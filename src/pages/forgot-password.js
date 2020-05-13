import React from 'react';
import Helmet from 'react-helmet';
import firebase from '../../firebase';
import Layout from '../components/Layout';
import { Error, Success } from '../components/Messages';
import PageContainer from '../components/PageContainer';
import { inputChange } from '../lib/events';


const ForgotPassword = () => {

  const [success, setSucces] = React.useState(false)
  const [error, setError] = React.useState('')
  const [forgetForm, setForgetForm] = React.useState({
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
      <PageContainer>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='px-6 py-2 border rounded shadow p-4 w-full'>
            <h1 className='mb-8 text-3xl text-gray-800 text-center'>Forgot Password</h1>
            <form method="post" onSubmit={resetPassword}>
              <input
                type='text'
                className='w-full mb-4 block text-gray-600 transition border focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
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
      </PageContainer>
    </Layout>
  )
};

export default ForgotPassword;
