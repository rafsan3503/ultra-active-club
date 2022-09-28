import React from 'react';

const Home = () => {
    return (
      <div className='flex'>
            <div className="w-2/3">
                <h2>Exercise</h2>
            </div>
            
            <div className="bg-red-700 w-1/3">
                <h2>User</h2>
            </div>
      </div>
    );
};

export default Home;