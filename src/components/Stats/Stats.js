import React from 'react';

const Stats = () => {
    return (
      <div className="flex justify-evenly my-5 bg-slate-50 rounded-xl text-black p-3">
        <div>
          <h2>
            <span className="text-2xl font-bold">61</span>kg
          </h2>
          <p>Weight</p>
        </div>
        <div>
          <h2>
            <span className="text-2xl font-bold">5.6</span>
          </h2>
          <p>Height</p>
        </div>
        <div>
          <h2>
            <span className="text-2xl font-bold">26</span>yr
          </h2>
          <p>Age</p>
        </div>
      </div>
    );
};

export default Stats;
