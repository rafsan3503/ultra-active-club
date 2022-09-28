import React, { useState } from 'react';
import Exercises from '../Exercises/Exercise';
import UserDetails from '../UserDetails/UserDetails';

const Home = () => {
    const [exerciseTime, setExerciseTime] = useState(0);
    const getExerciseTime = (seconds) => {
        setExerciseTime(seconds)
    }
    return (
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/4 min-h-screen flex justify-center items-center p-20">
          <div className="text-left">
            <h1 className="text-5xl text-left  font-bold">Goodlife-Exercise</h1>
            <p>Consider your fitness goals.Create a balanced routine.</p>

            <Exercises getExerciseTime={getExerciseTime}></Exercises>
          </div>
        </div>

        <div className="w-full lg:w-1/4 bg-slate-500 rounded-xl p-8">
          <div className="md:sticky top-10">
            <UserDetails exerciseTime={exerciseTime}></UserDetails>
          </div>
        </div>
      </div>
    );
};

export default Home;