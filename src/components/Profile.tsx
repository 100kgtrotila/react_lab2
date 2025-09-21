// @ts-ignore
import React from 'react';

interface ProfileProps {
    name: string;
    role: string;
    avatarUrl: string;
    bgColor: string;
}

const Profile: React.FC<ProfileProps> = ({ name, role, avatarUrl, bgColor }) => {
    return (
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm mx-auto">

            <div className={`h-24 ${bgColor}`}></div>

            <div className="relative p-6">

                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <img
                        src={avatarUrl}
                        alt={name}
                        className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                    />
                </div>

                <div className="pt-12 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-gray-500">{role}</p>
                </div>

                <div className="mt-6 text-center">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
