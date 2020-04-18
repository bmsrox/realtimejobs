import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
            <div className="w-full mx-auto flex flex-wrap">
                <div className="flex w-full lg:w-1/2 ">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-400">About</h3>
                        <p className="py-4">
                            Here you receive job offers in realtime.
                            This website has been made to help all people to find a job faster. 
                        </p>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-400">Developed by</h3>
                        <ul className="list-reset items-center pt-3">
                            <li>
                                <a className="inline-block no-underline hover:text-black hover:underline py-1" target="blank" href="https://github.com/bmsrox">bmsrox</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
};

export default Footer;
