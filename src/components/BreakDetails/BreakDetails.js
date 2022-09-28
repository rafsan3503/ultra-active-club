import React from 'react';

const BreakDetails = ({ getValue }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-left">Add a break</h2>
      <div className="bg-slate-400 rounded-lg p-4 my-4">
        <div className="flex flex-wrap justify-center gap-1">
          <div
            onClick={(e) => getValue(e)}
            className="rounded-full bg-white text-black border-2 p-3"
          >
            10s
          </div>

          <div
            onClick={(e) => getValue(e)}
            className="rounded-full bg-white text-black border-2 p-3"
          >
            20s
          </div>

          <div
            onClick={(e) => getValue(e)}
            className="rounded-full bg-white text-black border-2 p-3"
          >
            30s
          </div>

          <div
            onClick={(e) => getValue(e)}
            className="rounded-full bg-white text-black border-2 p-3"
          >
            40s
          </div>

          <div
            onClick={(e) => getValue(e)}
            className="rounded-full bg-white text-black border-2 p-3"
          >
            50s
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakDetails;