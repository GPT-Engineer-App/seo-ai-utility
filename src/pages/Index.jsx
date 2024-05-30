import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the SEO Utility App</h1>
      <p className="text-lg mb-4">
        This app provides a suite of SEO tools powered by AI to help you optimize your website.
      </p>
      <p className="text-lg">
        Use the navigation bar to access different features like keyword analysis, backlink checker, and more.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Share this App</h2>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <FaFacebook size={32} />
          </a>
          <a href="https://twitter.com/intent/tweet?url=https://yourapp.com&text=Check%20out%20this%20SEO%20Utility%20App!" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            <FaTwitter size={32} />
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourapp.com&title=SEO%20Utility%20App&summary=Check%20out%20this%20SEO%20Utility%20App!" target="_blank" rel="noopener noreferrer" className="text-blue-700">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;