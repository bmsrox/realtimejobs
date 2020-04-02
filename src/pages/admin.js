import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import { ShowEmailNotification } from '../components/Notifications'
import ChangePassword from '../admin/pages/change-password'

const Admin = () => {
  return (
      <Layout admin>
        <ShowEmailNotification/>
        <Router basepath='/admin'>
          <ChangePassword path="/password" />
        </Router>
      </Layout>
  )
}

export default Admin