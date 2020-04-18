import { Router } from '@reach/router';
import React from 'react';
import JobDetail from '../components/JobDetail';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <Router basepath="/job">
        <JobDetail path='/:jobid' />
      </Router>
    </Layout>
  )
}

export default Index
