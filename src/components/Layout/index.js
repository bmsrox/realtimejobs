import React from 'react';
import { AuthProvider } from '../../lib/AuthContext';
import Footer from '../Footer';
import Header from '../Header';
import './style.css';


const Layout = ({ children, admin=false }) => {
  return (
    <AuthProvider>
      <div className="bg-gray-300">
          <Header admin={admin}/>
            { children }          
          <Footer />
      </div>
    </AuthProvider>
  )
};

export default Layout;
