import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet'
//import { navigateTo, Link } from 'gatsby'
import { useAuth } from '../../lib/AuthContext'
import firebase from '../../lib/firebase'
import { Success, Error } from '../../components/Messages'
import { inputChange } from '../../lib/events'

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

  const changePassword = async () => {
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

      <div className='max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 py-4'>

        <h1 className='mb-8 text-3xl text-center'>Change Password</h1>
        { success && <Success message="Your password has been changed." />}

        { !success && <>
            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='currentPassword'
              value={changePasswordForm.currentPassword}
              onChange={onChange}
              placeholder='Current Password' />
            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='password'
              value={changePasswordForm.password}
              onChange={onChange}
              placeholder='Password' />
            <input
              type='password'
              className='block border border-grey-light w-full p-3 rounded mb-4 '
              name='confirm_password'
              value={changePasswordForm.confirm_password}
              onChange={onChange}
              placeholder='Confirm Password' />

            {error && <Error message={error} />}

            <button
              onClick={changePassword}
              className='w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'
            >Submit</button>
            </>
        }       
      </div>
    </>
  )
};

export default ChangePassword;
