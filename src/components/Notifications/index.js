import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby'
import { useAuth } from '../../lib/AuthContext'

export const ShowEmailNotification = () => {
  const auth = useAuth()
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (auth.isAuthReady && !auth.isAuth) {
      navigate('/')
    }
  }, [auth])

  const resendEmailVerification = async () => {
    try {
      setError(false)
      await auth.resendEmailVerification()
      setEmailSent(true)
    } catch(error) {
      setError(true)
      setEmailSent(true)
    }
  }

  if (!auth.isAuthReady) {
    return null
  }

  if (!auth.emailVerified) {
    return (
      <div className='bg-orange-200 p-4'>
        <p className='container mx-auto text-center'>Please, confirm your email address ({auth.email}) <br />
        { !emailSent && <button 
            onClick={resendEmailVerification}>Click here to resend email confirmation</button> 
        }
        { emailSent && <>
            <br /> Verification email sent. Please, check your inbox and follow the instructions
          </>
        }
        { error && <>
            <br /> Error, try again in few minutes.
          </>
        }
        </p>
      </div>
    )
  }

  return null
}
