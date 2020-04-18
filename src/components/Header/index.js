import { Link, navigateTo } from 'gatsby'
import React from 'react'
import { useAuth } from '../../lib/AuthContext'
import Menu from './menu'
import './style.css'


const Header = ({ admin }) => {
  const auth = useAuth()

  const signOut = async () => {
    await auth.signOut()
    navigateTo('/')
  }

  return (
    <nav id="header" className="w-full z-30 top-0 py-1 bg-gray-900 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

        <Link to="/" className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-white text-xl">
          REALTIME JOBS <span className="ml-2 text-xs mb-4">beta</span>
        </Link>
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full order-2 md:order-3" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-white md:pt-0">

              {!auth.isAuth && <>
                <li>
                  <Link
                    to="/signin"
                    className="inline-block no-underline hover:text-gray-800 py-2 px-4"
                  >Login</Link>
                </li>
                <li>
                  <Link
                    to='/signup'
                    className="inline-block py-2 px-4 text-gray-100 bg-gray-700 hover:bg-gray-800 rounded-lg"
                  > Sign Up
                    </Link>
                </li>
              </>
              }
                            
              {!admin && auth.isAuth && <>
                <li>
                  <Link
                    to='/admin'
                    className="inline-block py-2 px-4 text-gray-100 bg-gray-700 hover:bg-gray-800 rounded-lg">
                    Go to App
                    </Link>
                </li>
              </>
              }
                
              { admin && auth.isAuth &&
                <Menu signOut={signOut} username={auth.name}/>
              }
            </ul>
          </nav>
        </div>

      </div>
    </nav>
  )
}

export default Header;
