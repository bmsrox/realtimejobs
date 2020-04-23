import React from 'react';

const PageHeader = ({ children }) => (
  <section className="w-full container mx-auto">
    <div className="flex flex-col items-center py-12">
      {children}
    </div>
  </section>
);

export default PageHeader;
