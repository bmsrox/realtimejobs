import React from 'react'
import { Link, navigateTo } from 'gatsby'

import { useAuth } from '../../lib/AuthContext'
import MyAccount from './MyAccount'
import './style.css'

const Header = ({ admin }) => {
  const auth = useAuth()

  const signOut = async () => {
    await auth.signOut()
    navigateTo('/')
  }

  return (
      <div className="bg-gray-200 px-4 py-4">
        <div
          className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
        >
          <div>
            <Link to="/" className="inline-block py-2 text-gray-800 text-2xl font-bold"
            >Gatsby Template</Link>
          </div>
          { !admin &&
          <div>
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
              >How it Works</a>
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >Solutions</a>

              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >Pricing</a>
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >Desktop</a>
            </div>
          </div>
          }
          <div className="hidden md:block">
              { !auth.isAuth && <>
                <Link
                  to="/signin"
                  className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                >Login</Link>
                <Link
                  to='/signup'
                  className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
                > Sign Up
                </Link>
              </> 
             }
            
            { !admin && auth.isAuth && <>
                  <Link
                    to='/admin'
                    className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg">
                      Go to App
                  </Link>
                </>
              }

              { admin && auth.isAuth &&
                <MyAccount signOut={signOut}/>
              }
          </div>
        </div>
      </div>
  )
}

export default Header;
