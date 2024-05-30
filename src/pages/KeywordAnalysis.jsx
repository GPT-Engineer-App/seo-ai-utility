import React, { useState } from 'react';

const KeywordAnalysis = () => {
  const [keyword, setKeyword] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setAnalysis(null);
    try {
      const res = await fetch('http://localhost:5000/api/keyword-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword }),
      });
      const data = await res.json();
      if (res.ok) {
        setAnalysis(data);
      } else {
        setError(data.message || 'An error occurred while fetching the analysis.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching the analysis.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Keyword Analysis</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          className="border p-2 w-full mb-2"
          placeholder="Enter a keyword..."
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Analyze</button>
      </form>
      {error && (
        <div className="bg-red-100 p-4 rounded mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      {analysis && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Analysis Results:</h2>
          <p><strong>Search Volume:</strong> {analysis.searchVolume}</p>
          <p><strong>Competition:</strong> {analysis.competition}</p>
          <p><strong>Related Keywords:</strong> {analysis.relatedKeywords.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default KeywordAnalysis;