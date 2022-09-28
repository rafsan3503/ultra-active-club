import Avatar from '../Avatar/Avatar';
import BreakDetails from '../BreakDetails/BreakDetails';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Stats from '../Stats/Stats';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';

const UserDetails = ({ exerciseTime }) => {
  const [breakLs, setBreakLs] = useState(0);
  const getValue = (e) => {
    localStorage.setItem("break-time", e.target.innerText);
    setBreakLs(e.target.innerText);
  };

  useEffect(() => {
    const savedValue = localStorage.getItem("break-time");
    setBreakLs(savedValue);
  }, []);
  return (
    <div>
      <Avatar></Avatar>

      <Stats></Stats>

      <BreakDetails getValue={getValue}></BreakDetails>

      <ExerciseDetails
        breakLs={breakLs}
        exerciseTime={exerciseTime}
      ></ExerciseDetails>
      <ToastContainer></ToastContainer>
      <button
        onClick={() => toast("Congratulations!! activity complete")}
        className="btn btn-secondary"
      >
        Activity Completed
      </button>
    </div>
  );
};

export default UserDetails;