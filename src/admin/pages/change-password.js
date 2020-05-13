import React from 'react';
import Helmet from 'react-helmet';
import firebase from '../../../firebase';
import { Error, Success } from '../../components/Messages';
import PageContainer from '../../components/PageContainer';
import { useAuth } from '../../lib/AuthContext';
import { inputChange } from '../../lib/events';

const ChangePassword = () => {

  const auth = useAuth()
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [
    changePasswordForm,
    setChangePasswordForm
  ] = React.useState({
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

      <PageContainer>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 text-white w-full border rounded shadow p-4'>
            <h1 className='mb-8 text-3xl text-gray-800 text-center'>Change Password</h1>
            <form method="post" onSubmit={changePassword}>
              {success && <Success message="Your password has been changed." />}

              {!success && <>
                <input
                  type='password'                  
                  className='mb-4 block text-gray-600 transition border focus:outline-none focus:border-gray-600 rounded p-4 w-full'
                  name='currentPassword'
                  value={changePasswordForm.currentPassword}
                  onChange={onChange}
                  placeholder='Current Password' />
                <input
                  type='password'
                  className='mb-4 block text-gray-600 transition border focus:outline-none focus:border-gray-600 rounded p-4 w-full'
                  name='password'
                  value={changePasswordForm.password}
                  onChange={onChange}
                  placeholder='Password' />
                <input
                  type='password'
                  className='mb-4 block text-gray-600 transition border focus:outline-none focus:border-gray-600 rounded p-4 w-full'
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
      </div>
      </PageContainer>
    </>
  )
};

export default ChangePassword;
