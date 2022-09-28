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

        <div className='flex justify-evenly my-5 bg-slate-50 rounded-xl text-black p-3'>
            <div>
                <h2><span className='text-2xl font-bold'>61</span></h2>
                <p>Weight</p>
            </div>
            <div>
                <h2>6.5</h2>
                <p>Height</p>
            </div>
            <div>
                <h2>26Yr</h2>
                <p>Age</p>
            </div>
        </div>

        <div></div>

        <div></div>
        <button className="btn btn-secondary">Activity Completed</button>
      </div>
    );
};

export default UserDetails;