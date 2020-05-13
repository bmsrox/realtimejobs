import React from 'react';
import Helmet from 'react-helmet';
import { inputChange } from '../../lib/events';
import { findJobs } from '../../service/jobs';
import JobItem from '../JobItem';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';

const Home = () => {

  const [jobs, setJobs] = React.useState([])
  const [search, setSearch] = React.useState({ term: "", wasSearched: false })

  const loadJobs = async () => {
    setJobs(await findJobs())
  }

  React.useEffect(()=> {
    if (!search.wasSearched && search.term === "") {
      loadJobs()
    }
  }, [search])

  const onChangeSearch = (e) => {
    inputChange(e, setSearch)
  }

  const resetSearch = (e) => {
    if (!e.target.value) {
      loadJobs()
    }
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const regex = new RegExp(`${search.term}`, 'gi' )
    const result = jobs.filter( job => {
      return job.title.match(regex)
    })

    setJobs(result)
    setSearch(state => ({...state, wasSearched: !search.wasSearched}))
  }

  return (
    <>
      <Helmet>
        <title>Realtime Jobs</title>
      </Helmet>

      <PageHeader>
          <div className="flex flex-col items-center px-3 w-full text-center">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <input 
                type="text"
                name="term"
                value={search.term} 
                onChange={(e) => {onChangeSearch(e); resetSearch(e)}} 
                placeholder="Search" 
                className="w-full md:w-3/5 bg-white text-3xl text-gray-600 transition border border-gray-400 focus:outline-none focus:border-gray-600 rounded p-2 mb:p-4"
              />
            </form>
          </div>
      </PageHeader>

      <PageContainer>
        <section className="w-full px-3">
          { jobs.map(job => <JobItem key={job.id} job={job} />) }
        </section>
      </PageContainer>
    </>
  )
};

export default Home;
