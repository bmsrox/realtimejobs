import React from 'react';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';

const JobDetail = () => {
    return (
        <>
            <PageHeader>
                <h1 className="font-bold text-gray-800 uppercase text-5xl" href="#">
                    Minimal Blog
                </h1>
            </PageHeader>
            <PageContainer>
                <section class="w-full md:w-2/3 flex flex-col items-center px-3">

                    <article class="flex flex-col shadow">
                        <div class="bg-white flex flex-col justify-start p-6">
                            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                            <h1 class="text-2xl font-bold pb-3">Introduction</h1>
                            <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit.</p>
                        </div>
                    </article>

                </section>
                <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

                    <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                        <div class="flex justify-center md:justify-center pb-4">
                            <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" class="rounded-full shadow h-32 w-32" />
                        </div>
                        <p class="text-xl text-center font-semibold pb-5">Jonh Due</p>
                        <p class="pb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                        <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                            Apply
                        </a>
                    </div>

                </aside>
            </PageContainer>
        </>
    )
}

export default JobDetail;
