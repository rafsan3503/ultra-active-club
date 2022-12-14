const Exercise = ({ exercise, getExerciseTime, cartText }) => {
  return (
    <div className="mt-10 w-full">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-96 h-96 object-cover rounded-xl"
            src={exercise.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{exercise.name}</h2>
          <p>For Age: 20-25</p>
          <p>Time required: {exercise.seconds}s</p>
          <div className="card-actions justify-end">
            <div
              onClick={() => getExerciseTime(exercise.seconds)}
              className="btn btn-outline"
            >
              Add to List
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;