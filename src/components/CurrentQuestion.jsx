import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOneScore } from '@/state/quiz/quizSlice';
import { addPassedQuestionId } from '@/state/quiz/questionsSlice';
import { addWrongQuestion, removeWrongQuestion } from '@/state/quiz/questionsSlice';
import TryAgainMessage from './ui/TryAgainMessage';
import GoodJobMessage from './ui/GoodJobMessage';
import CustomButton from '@/components/ui/CustomButton';

const CurrentQuestion = ({question, onPass, onFail}) => {
  const [warning, setWarning] = useState(null);
  const [pass, setPass] = useState(false);
  const [tryNum, setTryNum] = useState(0);
  const [disableBtns, setDisableBtns] = useState(false);

  const passedQuestionIds = useSelector((state)=>state.questions.passedQuestionIds);
  const wrongQuestions = useSelector((state)=>state.questions.wrongQuestions);
  const dispatch = useDispatch();

  const handleAnswer = (a) => {
      const includedInPassed = passedQuestionIds.includes(question.id);
      const includedInWrong = wrongQuestions.map(q=>q.question).includes(question.question);
      if (a=== question.answer) {
        setDisableBtns(true);
        setPass(true);
        setWarning(null);
        if(!includedInPassed){
          dispatch(addPassedQuestionId(question.id));
          dispatch(addOneScore());
        }
        if(includedInWrong){
          dispatch(removeWrongQuestion(question));
        }
        onPass();
      }else{
        setPass(false);
        if(tryNum===0){
          setWarning("Try again ~");
          setTryNum(tryNum+1);
        }else{
          setDisableBtns(true);
          setWarning("Incorrect...");
          if(!includedInWrong) dispatch(addWrongQuestion(question));
          onFail();
        }
      }
    };
    
    //For a new question, always reset the pass status into false
    useEffect(()=>{
      setPass(false);
      setWarning(null);
      setTryNum(0);
      setDisableBtns(false);
    },[question]);
    
    return (
        <div>
          <h3>{question.question}</h3>
          <div>
            {question.options.map(option => (
              <CustomButton disabled={disableBtns} key={option.id} onClick={() => handleAnswer(option.value)}>
                {option.value}
              </CustomButton>
            ))}
          </div>
          {warning && <TryAgainMessage msg={warning}/>}
          {pass &&  <GoodJobMessage />}
        </div>
   );
}
export default CurrentQuestion;