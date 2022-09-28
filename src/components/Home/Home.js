import React from 'react';
import Exercises from '../Exercises/Exercise';
import Exercise from '../Exercises/Exercise';

const Home = () => {
    return (
      <div className="flex mt-20">
        <div className="w-3/4 min-h-screen flex justify-center items-center">
          <div className='text-left'>
                <h1 className="text-5xl text-left  font-bold">Goodlife-Exercise</h1>
                <p>Consider your fitness goals.Create a balanced routine.</p>
                    
               <Exercises></Exercises> 
                    
          </div>
        </div>

        <div className="bg-red-700 w-1/4">
          <h2>User</h2>
        </div>
      </div>
    );
};

export default Home;