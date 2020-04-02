import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { AuthProvider } from '../../lib/AuthContext'

import './style.css';

const Layout = ({ children, admin=false }) => {
  return (
    <AuthProvider>
      <div className="font-sans bg-white flex flex-col min-h-screen w-full">
        <div>
          <Header admin={admin}/>
            { children }          
          <Footer />
        </div>
      </div>
    </AuthProvider>
  )
};

export default Layout;
