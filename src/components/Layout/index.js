import React from 'react';
import Helmet from 'react-helmet';
import { AuthProvider } from '../../lib/AuthContext';
import Footer from '../Footer';
import Header from '../Header';
import './style.css';

const Layout = ({ children, admin=false }) => {
  return (
    <AuthProvider>
      <Helmet bodyAttributes={{
        class: 'bg-gray-300'
      }} />
      <Header admin={admin}/>
        { children }          
      <Footer />
    </AuthProvider>
  )
};

export default Layout;
