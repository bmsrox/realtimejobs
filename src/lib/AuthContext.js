import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from './firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false, isAuthReady: false })
  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          const { email, displayName, emailVerified, uid } = user

          setAuth({
            isAuth: true,
            email,
            name: displayName || email,
            emailVerified,
            uid,
            isAuthReady: true
          })
        } else {
          setAuth({
            isAuth: false,
            isAuthReady: true
          })
        }
    });
  }, [])

  const resendEmailVerification = async () => {
    const user = firebase.auth().currentUser
    await user.sendEmailVerification()
  }

  const signOut = async () => {
    await firebase.auth().signOut()
  }

  return (
    <AuthContext.Provider value={{...auth, resendEmailVerification, signOut}}>
      { children }
    </AuthContext.Provider>
  )
}

//custom hook
export const useAuth = () => useContext(AuthContext)