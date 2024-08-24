import { BiMath } from "react-icons/bi";
import { Link } from "react-router-dom";

import CustomButton from "@/components/ui/CustomButton";
import InfoForm from '@/components/InfoForm';
import { KidInfoContext } from '@/App';

import '@/css/HomeScreen.scss';
import { useContext } from "react";

const HomeScreen = ()=> {
  const kidInfo = useContext(KidInfoContext);

  return (
    <div className="home-screen">
      <div className="context-container">
      <h1>Kiddo Quiz</h1>
      {!kidInfo && <InfoForm />}
      {kidInfo &&
      <>
      <p>Get smarter every day with a fun quiz</p>
      <Link to="/math"><CustomButton className="math"><BiMath className="icon"/>Math Quiz</CustomButton></Link>
      {//for the next phase
      /* <CustomButton className="reading" disabled><FaBook className="icon"/>Reading Quiz</CustomButton> */}
       </>
       }
      </div>
    </div>
  );
}

export default HomeScreen;
