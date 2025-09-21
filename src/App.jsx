import React from 'react';
import Profile from './components/Profile';

function App() {
    const developers = [
        { id: 1, name: 'robot1', role: 'Creator of the Earth', bgColor: 'bg-black' },
        { id: 2, name: 'robot2', role: 'React Developer', bgColor: 'bg-white' },
        { id: 3, name: 'robot3', role: 'Fullstack', bgColor: 'bg-black' },
        { id: 4, name: 'robot4', role: 'Beatmaker', bgColor: 'bg-white' },
        { id: 5, name: 'robot6', role: 'King of the graveyard', bgColor: 'bg-black' }
    ];

    const avatarStyle = 'bottts';

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
