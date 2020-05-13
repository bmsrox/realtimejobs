import React from 'react';
import { findJobById } from '../../service/jobs';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';

const JobDetail = ({ jobid }) => {
    const [job, setJob] = React.useState({})

    React.useEffect(() => {
        async function loadJob() {
            setJob(await findJobById(jobid))
        }
        loadJob()
    }, [])

    return (
        <>
            <PageHeader>
                <h1 className="font-bold text-gray-800 uppercase text-5xl" href="#">
                    { job.title }
                </h1>
            </PageHeader>
            <PageContainer>
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                    <article className="w-full flex flex-col my-4 shadow">
                        <div className="bg-white flex flex-col justify-start p-6">
                            <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{ job.category }</a>
                            <h4 className="text-2xl font-bold pb-3">Description</h4>
                            <p className="pb-3">{ job.description }</p>
                            <h4 className="text-2xl font-bold pb-3">Skills</h4>
                            <p className="pb-3">{ job.skills }</p>
                            <h4 className="text-2xl font-bold pb-3">Salary</h4>
                            <p className="pb-3">${ job.salary }</p>
                            <h4 className="text-2xl font-bold pb-3">Company</h4>
                            <p className="pb-3">{ job.company }</p>
                        </div>
                    </article>

                </section>
                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <div className="flex justify-center md:justify-center pb-4">
                            <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" className="rounded-full shadow h-32 w-32" />
                        </div>
                        <p className="text-xl text-center font-semibold pb-5">Jonh Due</p>
                        <p className="pb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                        <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                            Apply
                        </a>
                    </div>

                </aside>
            </PageContainer>
        </>
    )
}

export default JobDetail;
