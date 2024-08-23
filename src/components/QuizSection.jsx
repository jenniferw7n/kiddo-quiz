import { useState, useCallback, useEffect} from 'react';
import CurrentQuestion from './CurrentQuestion';
import ProgressIndicator from './ui/ProgressIndicator';
import { useSelector, useDispatch } from 'react-redux';
import '@/css/QuizSection.scss';
import CustomCard from './ui/CustomCard';
import CustomButton from './ui/CustomButton';
import FinalScoreBoard from './FinalScoreBoard';

import { resetScore } from '@/state/quiz/quizSlice';
import { resetPassedQuestionIds } from '@/state/quiz/questionsSlice';


const QuizSection = ({questions, showRetryWrongBtn, onRestart, onRetry}) => {
  const currentScore = useSelector((state) => state.quiz.score);
  const dispatch = useDispatch();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFinalScore, setShowFinalScore]= useState(false);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSubmit = useCallback(() => {
    setShowFinalScore(true);
  },[]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handlePassQuestion = async ()=>{
    //delay 3 sec for animation to show and then move on to the next question
     setTimeout(()=> {handleNext()}, 3000);
  }

  const handleFailQuestion =  async ()=>{
    //delay 1 sec to show the warning msg.
    setTimeout(()=> {handleNext()}, 1000);
  }

  const handleRestart = useCallback(()=>{
    onRestart()},[onRestart]);

  const handleRetryWrong = useCallback(()=>{
    onRetry();},[onRetry]);

  useEffect(()=>{
    setShowFinalScore(false);
    setCurrentQuestionIndex(0);
    dispatch(resetScore());
    dispatch(resetPassedQuestionIds());
  }, [questions, dispatch]);
    
    return (
      <CustomCard sx={{position: 'relative', zIndex: '-1', overflow: 'visible', minHeight: '50vh'}}>
      {!showFinalScore && questions && 
      <>
      <div className={`score-container ${currentScore ? 'active' : 'inactive'}`}>
      <span className={'score'}>
        {currentScore}
      </span>
      </div>
      <div className="quiz">
          <div className='section-header'>
            <div className="progress">
              <div className="progress-header">Question {currentQuestionIndex + 1} of {questions.length}</div>
              <ProgressIndicator progress={progress} />
            </div>
          </div>
        <div className="question">
        {questions[currentQuestionIndex] && 
        <CurrentQuestion question={questions[currentQuestionIndex]} 
        onPass={handlePassQuestion} 
        onFail={handleFailQuestion}
        />}
        </div>
        <div className="navigation">
          {currentQuestionIndex > 0 && (
            <CustomButton className="btn-previous" onClick={handlePrevious}>Previous</CustomButton>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <CustomButton className="btn-next primary" onClick={handleNext}>Next</CustomButton>
          ) : (
            <CustomButton className="btn-submit primary" onClick={handleSubmit}>Submit</CustomButton>
          )}
        </div>
      </div>
      </>
    }
     {showFinalScore && 
      <>
      <FinalScoreBoard currentScore={currentScore} questionsLength = {questions.length} />
      <div className='finalboard-btns'>
        {showRetryWrongBtn && <CustomButton className="secondary" onClick={() => handleRetryWrong()}>Retry Some Hard Questions</CustomButton>}
        <CustomButton onClick={() => handleRestart()}>Start A New Quiz</CustomButton>
      </div>
      </>
      }
      </CustomCard>

    );
}
export default QuizSection;