import React from 'react';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full bg-purple-600 text-white py-4 mb-8">
        <h1 className="text-2xl font-bold px-6">myCarnival</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to myCarnival</h1>
        <p className="text-gray-600 mb-6">Before we get started, please choose your role:</p>
        
        <div className="flex gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Carnival Organizer
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Attendee
          </button>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;