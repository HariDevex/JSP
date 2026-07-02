import React from 'react';
import { branches } from '../constants';

const Centers = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">Our Branches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-6">
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={branch.imageURL}
                  alt={branch.name}
                  className="object-contain"
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                />
              </div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">{branch.name}</h2>
              <p className="text-gray-600">{branch.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Centers;
