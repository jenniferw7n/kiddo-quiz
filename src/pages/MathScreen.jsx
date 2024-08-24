import HeadBar from '@/components/HeadBar';
import QuizContainer from '@/components/QuizContainer';
import '@/css/MathScreen.scss';


const MathScreen = () => {
    return (
      <>
      <HeadBar/>
      <div className="quiz-screen">
        <QuizContainer />
      </div>
      </>
    );
}
 
export default MathScreen;