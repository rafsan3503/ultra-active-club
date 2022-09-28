import React from 'react';

const Exercise = ({exercise}) => {
    return (
      <div className='mt-10'>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={exercise.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Exercise;