import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch("exercise.json")
            .then(res => res.json())
            .then(data => setExercises(data))  
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                exercises?.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
            }
        </div>
    );
};

export default Exercises;