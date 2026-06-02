import React from 'react';

const WelcomePage = () => {
  return (
    <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <header class="w-full bg-purple-600 text-white py-4 mb-8">
            <h1 class="text-2xl font-bold">myCarnival</h1>
        </header>
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to myCarnival</h1>
      <p class="text-gray-600 mb-6">Before we get started, please choose your role:</p>
      <div class="flex gap-4">
        <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">Carnival Organizer</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Attendee</button>
      </div>
    </div>
  );
};

export default WelcomePage;