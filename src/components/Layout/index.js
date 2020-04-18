import React from 'react';
import { AuthProvider } from '../../lib/AuthContext';
import Footer from '../Footer';
import Header from '../Header';
import './style.css';


const Layout = ({ children, admin=false }) => {
  return (
    <AuthProvider>
      <div className="bg-dark text-gray-600 work-sans leading-normal text-base tracking-normal">
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
