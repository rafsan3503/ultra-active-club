import React from 'react';

const UserDetails = () => {
    return (
      <div>
        <div class="avatar online">
          <div class="w-16 rounded-full">
            <img alt="" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <h2 className="text-3xl">Mahmud Hasan</h2>
        <p>Dhaka,Bangladesh</p>

        <div className="flex justify-evenly my-5 bg-slate-50 rounded-xl text-black p-3">
          <div>
            <h2>
              <span className="text-2xl font-bold">61</span>kg
            </h2>
            <p>Weight</p>
          </div>
          <div>
            <h2>
              <span className="text-2xl font-bold">5.6</span>inch
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

        <div>
          <h2 className="text-2xl font-bold text-left">Add a break</h2>
          <div className="bg-slate-400 rounded-lg p-4 my-4">
            <div className="flex justify-evenly gap-1">
              <div class="rounded-full bg-white text-black border-2 p-3">
                10
              </div>

              <div class="rounded-full bg-white text-black border-2 p-3">
                10
              </div>

              <div class="rounded-full bg-white text-black border-2 p-3">
                10
              </div>

              <div class="rounded-full bg-white text-black border-2 p-3">
                10
              </div>

              <div class="rounded-full bg-white text-black border-2 p-3">
                10
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-left">Exercise Details</h2>
          <div className="flex bg-yellow-50 rounded-lg text-black justify-between px-3 py-4 text-xl font-semibold my-5">
            <h2>Exercise Time</h2>
            <h2 className="text-slate-500">200s</h2>
          </div>

          <div className="flex bg-yellow-50 rounded-lg text-black justify-between px-3 py-4 text-xl font-semibold my-5">
            <h2>Exercise Time</h2>
            <h2 className="text-slate-500">200s</h2>
          </div>
        </div>
        <button className="btn btn-secondary">Activity Completed</button>
      </div>
    );
};

export default UserDetails;