import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../lib/AuthContext';
import { findJobByAuthorId } from '../../service/jobs';
import JobItem from '../components/JobItem';

const Dashboard = () => {

  const auth = useAuth()
  const [jobs, setJobs] = React.useState([])

  React.useEffect(()=> {
    async function loadJobs() {
      setJobs(await findJobByAuthorId(auth.uid))
    }

    if (auth.isAuthReady) {
      loadJobs()  
    }
  }, [auth, jobs])

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <PageHeader>
        <Link to="/admin/post" className='font-bold text-xl text-center px-20 py-6 rounded bg-green-600 text-white hover:bg-green-500 focus:outline-none my-1'>
          Post a new Job
        </Link>
      </PageHeader>      
      <PageContainer>
        <section className="w-full flex flex-col items-center px-3">
          { jobs.map(job => <JobItem key={job.id} job={job} />) }
        </section>
      </PageContainer>
    </>
  )
};

export default Dashboard;
