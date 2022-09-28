import React, { useEffect, useState } from 'react';

const ExerciseDetails = ({ getValue }) => {
  const [breakLs, setBreakLs] = useState(0);

  useEffect(() => {
    const savedValue = localStorage.getItem("break-time");
    setBreakLs(savedValue);
  },[getValue])
  
  return (
    <div>
      <h2 className="text-3xl font-bold text-left">Exercise Details</h2>
      <div className="flex bg-yellow-50 rounded-lg text-black justify-between px-3 py-4 text-xl font-semibold my-5">
        <h2>Exercise Time</h2>
        <h2 className="text-slate-500">200s</h2>
      </div>

      <div className="flex bg-yellow-50 rounded-lg text-black justify-between px-3 py-4 text-xl font-semibold my-5">
        <h2>Break Time</h2>
        <h2 className="text-slate-500">{breakLs}s</h2>
      </div>
    </div>
  );
};

export default ExerciseDetails;