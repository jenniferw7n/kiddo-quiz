import CustomButton from "@/components/ui/CustomButton";
import { BiMath } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import {Link} from "react-router-dom";
import '@/css/HomeScreen.scss';

const HomeScreen = ()=> {
  return (
    <div className="home-screen">
      <h1>Kiddo Quiz</h1>
      <Link to="/math"><CustomButton className="math"><BiMath className="icon"/>  Math Quiz</CustomButton></Link>
      <Link to="/reading"><CustomButton className="reading" disabled><FaBook className="icon"/>  Reading Quiz</CustomButton></Link>
    </div>
  );
}

export default HomeScreen;
