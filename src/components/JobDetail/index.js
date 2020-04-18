import React from 'react';
import Recruiter from './recruiter';

const JobDetail = () => {
    return (
        <div className="container mx-auto flex flex-wrap py-6">

            <section className="w-full mx-auto bg-nordic-gray-light flex pt-16 md:pt-0 md:items-center h-32">
                <div className="container mx-auto">
                    <h1 className="text-white text-3xl font-bold my-4 text-center"> JOB TITLE </h1>
                </div>
            </section>

            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                <article className="flex flex-col shadow my-4 bg-gray-900 border border-gray-800 rounded shadow p-4">
                    <div className="flex flex-col justify-start p-6">
                        <span className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</span>
                        <span className="text-3xl font-bold pb-4">Job Description</span>
                        <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit.</p>
                    </div>
                </article>
            </section>

            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <Recruiter />
            </aside>
        </div>
    )
}

export default JobDetail;
