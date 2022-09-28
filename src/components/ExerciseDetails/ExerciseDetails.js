const ExerciseDetails = ({ breakLs, exerciseTime }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-left">Exercise Details</h2>
      <div className="flex bg-yellow-50 rounded-lg text-black justify-between px-3 py-4 text-xl font-semibold my-5">
        <h2>Exercise Time</h2>
        <h2 className="text-slate-500">{exerciseTime}s</h2>
      </div>

      <div className="flex bg-yellow-50 rounded-lg text-black justify-between px-3 py-4 text-xl font-semibold my-5">
        <h2>Break Time</h2>
        <h2 className="text-slate-500">{breakLs}</h2>
      </div>
    </div>
  );
};

export default ExerciseDetails;