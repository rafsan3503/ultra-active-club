import React, { useState } from 'react';
import Blog from '../Blogs/Blog';
import Exercises from '../Exercises/Exercises';
import UserDetails from '../UserDetails/UserDetails';
import logo from "../../Assets/pngegg.png";

const Home = () => {
    const [exerciseTime, setExerciseTime] = useState(0);
    const getExerciseTime = (seconds) => {
      setExerciseTime(seconds + exerciseTime);
    }
    return (
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/4 min-h-screen flex justify-center items-center p-20">
          <div className="text-left">
            <div className='flex items-center gap-4'>
              <img className='w-16'
                src={logo}
                alt=""
              />
              <h1 className="text-5xl text-left  font-bold">
                Goodlife-Exercise
              </h1>
            </div>
            <p>Consider your fitness goals.Create a balanced routine.</p>

            <Exercises
              getExerciseTime={getExerciseTime}
            ></Exercises>

            <Blog></Blog>
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