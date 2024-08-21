import CustomButton from "@/components/ui/CustomButton";
import {Link} from "react-router-dom";
import HeadBar from '@/components/HeadBar';
import '@/css/NotFoundPage.scss'

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <HeadBar />
      <div className="context-container">
      <h3>Not Found</h3>
      <p>Unfortunately, the page does not exist.</p>
      <Link to="/"><CustomButton className="home">Back To Home</CustomButton></Link>
      </div>
       
    </div>
  );
};

export default NotFoundPage;
