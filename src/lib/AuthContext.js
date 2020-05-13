import React from 'react'
import firebase from '../../firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState({ isAuth: false, isAuthReady: false })
  React.useEffect(() => {
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
            isAuthReady: false
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
export const useAuth = () => React.useContext(AuthContext)