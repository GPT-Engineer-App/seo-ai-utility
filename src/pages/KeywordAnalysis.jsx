import React, { useState } from 'react';

const KeywordAnalysis = () => {
  const [keyword, setKeyword] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:5000/api/keyword-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword }),
      });
      const data = await res.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching the analysis.');
    } finally {
      setLoading(false);
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
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {analysisResult && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-2xl font-bold mb-2">Analysis Results:</h2>
          <p><strong>Search Volume:</strong> {analysisResult.searchVolume}</p>
          <p><strong>Competition:</strong> {analysisResult.competition}</p>
          <p><strong>Related Keywords:</strong> {analysisResult.relatedKeywords.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default KeywordAnalysis;