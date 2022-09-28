import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import BreakDetails from '../BreakDetails/BreakDetails';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Stats from '../Stats/Stats';

const UserDetails = ({ exerciseTime }) => {
  const [time, setTime] = useState(200);
  return (
    <div>
    <Avatar></Avatar>

    <Stats></Stats>

    <BreakDetails></BreakDetails>
          
    <ExerciseDetails></ExerciseDetails>
    <button className="btn btn-secondary">Activity Completed</button>
    </div>
  );
};

export default UserDetails;