import React, { useState } from 'react';

const SocialMediaIntegration = () => {
  const [connectedAccounts, setConnectedAccounts] = useState({
    facebook: false,
    twitter: false,
    linkedin: false,
    instagram: false,
  });

  const handleConnect = (platform) => {
    // Simulate connecting to a social media platform
    setConnectedAccounts((prev) => ({ ...prev, [platform]: true }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Social Media Integration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(connectedAccounts).map((platform) => (
          <div key={platform} className="border p-4 rounded">
            <h2 className="text-2xl font-bold mb-2 capitalize">{platform}</h2>
            {connectedAccounts[platform] ? (
              <p className="text-green-500">Connected</p>
            ) : (
              <button
                onClick={() => handleConnect(platform)}
                className="bg-blue-500 text-white p-2"
              >
                Connect {platform}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaIntegration;