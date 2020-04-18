import React, { useState } from 'react';
import Helmet from 'react-helmet';
import firebase from '../../../firebase';
import { Error, Success } from '../../components/Messages';
import { useAuth } from '../../lib/AuthContext';
import { inputChange } from '../../lib/events';


const ChangePassword = () => {

  const auth = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [
    changePasswordForm,
    setChangePasswordForm
  ] = useState({
    currentPassword: '',
    password: '',
    confirm_password: ''
  })

  const onChange = (e) => {
    inputChange(e, setChangePasswordForm, setError);
  }

  const changePassword = async (e) => {
    e.preventDefault()
    setError('')
    const { currentPassword, password, confirm_password } = changePasswordForm

    if (password.length < 6 && password === confirm_password) {
      return setError('Password must be at least 6 characters long.')
    } else if (password !== confirm_password) {
      return setError('Password does not match!')
    }

    try {
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        auth.email,
        currentPassword
      );
      await user.reauthenticateWithCredential(credential)
      await user.updatePassword(password)
      setSuccess(true)
    } catch (error) {
      setError(error.message)
      setSuccess(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Change Password</title>
      </Helmet>

      <div class="container mx-auto py-6">
        <section className="w-full mx-auto bg-nordic-gray-light flex pt-16 md:pt-0 md:items-center h-24">
          <div className="container mx-auto">
            <h1 className="text-white text-3xl font-bold my-4 text-center"> Change Password </h1>
          </div>
        </section>
        <section class="w-full flex flex-col items-center my-4 px-3 bg-gray-900 border border-gray-800 rounded shadow p-4">
          <div className='max-w-sm items-center justify-center px-2 py-4'>
            <form method="post" onSubmit={changePassword}>
              {success && <Success message="Your password has been changed." />}

              {!success && <>
                <input
                  type='password'                  
                  className='bg-gray-900 mb-4 block text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
                  name='currentPassword'
                  value={changePasswordForm.currentPassword}
                  onChange={onChange}
                  placeholder='Current Password' />
                <input
                  type='password'
                  className='bg-gray-900 mb-4 block text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
                  name='password'
                  value={changePasswordForm.password}
                  onChange={onChange}
                  placeholder='Password' />
                <input
                  type='password'
                  className='bg-gray-900 mb-4 block text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded pb-4 pt-5 pl-4 pr-4 appearance-none leading-normal'
                  name='confirm_password'
                  value={changePasswordForm.confirm_password}
                  onChange={onChange}
                  placeholder='Confirm Password' />

                {error && <Error message={error} />}

                <button
                  type="submit"
                  className='w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'
                >Save</button>
              </>
              }
            </form>
          </div>
        </section>
      </div>
    </>
  )
};

export default ChangePassword;
