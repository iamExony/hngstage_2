// src/components/ErrorPage.js

import React from 'react';

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Movie Not Found</h1>
      <p className="text-lg mt-4">Sorry, the movie you are looking for was not found.</p>
    </div>
  );
};

export default ErrorPage;
