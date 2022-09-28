import Avatar from '../Avatar/Avatar';
import BreakDetails from '../BreakDetails/BreakDetails';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Stats from '../Stats/Stats';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetails = () => {
  const getValue = (e) => {
    localStorage.setItem("break-time", e.target.innerText);
    return e.target.innerText;
  };
  return (
    <div>
      <Avatar></Avatar>

      <Stats></Stats>

      <BreakDetails getValue={getValue}></BreakDetails>

      <ExerciseDetails getValue={getValue}></ExerciseDetails>
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