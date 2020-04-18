import { Router } from '@reach/router'
import React from 'react'
import ChangePassword from '../admin/pages/change-password'
import Dashboard from '../admin/pages/dashboard'
import Post from '../admin/pages/post'
import Layout from '../components/Layout'
import { ShowEmailNotification } from '../components/Notifications'

const Admin = () => {
  return (
      <Layout admin>
        <ShowEmailNotification/>
        <Router basepath='/admin'>
          <ChangePassword path="/password" />
          <Dashboard path="/" />
          <Post exact path="/post" isNewRecord />
          <Post exact path="/post/:jobid" />
        </Router>
      </Layout>
  )
}

export default Admin