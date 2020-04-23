import React from 'react';

const PageContainer = ({ children }) => (
  <div className="container mx-auto flex flex-wrap py-6">
    { children }
  </div>
);

export default PageContainer;
