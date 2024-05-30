import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">SEO Utility App</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/keyword-analysis" className="text-white">Keyword Analysis</Link>
          <Link to="/backlink-checker" className="text-white">Backlink Checker</Link>
          <Link to="/ollama-integration" className="text-white">Ollama Integration</Link> {/* Add the new link */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;