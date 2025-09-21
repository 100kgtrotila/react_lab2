import React from 'react';
import Profile from './components/Profile';

function App() {
    const developers = [
        { id: 1, name: 'Brendan Eich', role: 'Creator of JavaScript', bgColor: 'bg-yellow-400' },
        { id: 2, name: 'Jordan Walke', role: 'Creator of React', bgColor: 'bg-cyan-500' },
        { id: 3, name: 'Guido van Rossum', role: 'Creator of Python', bgColor: 'bg-blue-500' },
        { id: 4, name: 'Yukihiro Matsumoto', role: 'Creator of Ruby', bgColor: 'bg-red-500' },
        { id: 5, name: 'Rasmus Lerdorf', role: 'Creator of PHP', bgColor: 'bg-indigo-500' }
    ];

    const avatarStyle = 'bottts'; // Спробуй також: 'adventurer', 'pixel-art', 'big-smile'

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800">Language Creators</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {developers.map(dev => {
                    const avatarUrl = `https://api.dicebear.com/9.x/${avatarStyle}/svg?seed=${dev.name}`;

                    return (
                        <Profile
                            key={dev.id}
                            name={dev.name}
                            role={dev.role}
                            bgColor={dev.bgColor}
                            avatarUrl={avatarUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
