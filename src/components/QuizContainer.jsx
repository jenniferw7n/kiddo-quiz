import { useState, useMemo, useEffect, useCallback, useContext } from 'react';
import QuizSection from "@/components/quizSection";
import {shuffleArray} from "@/lib/utils/shuffleArray";

import { useDispatch, useSelector } from 'react-redux';

import ToolBox from '@/components/ToolBox';
import DataRenderer from '@/components/DataRenderer';
import CalculateIcon from '@mui/icons-material/Calculate';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TuneIcon from '@mui/icons-material/Tune';

import { resetScore } from '@/state/quiz/quizSlice';
import { fetchQuestions, fetchWrongQuestions } from '@/state/quiz/questionsSlice';
import { KidInfoContext } from '@/App';
import { updateKidInfo } from '@/state/kidInfoSlice';

import '@/css/MathScreen.scss';

const QuizContainer = () => {
  const dispatch = useDispatch();
  const kidInfo = useContext(KidInfoContext);
  const [params, setParams] = useState({
    type: kidInfo?.type? kidInfo.type : 'add-sub',
    level: kidInfo?.level? kidInfo.level: 2,
    numOfQuestions: kidInfo?.numOfQuestions? kidInfo.numOfQuestions: 10
  });
  const [showSetting, setShowSetting] = useState(false);

  const fetchOptions = useMemo(() => ({ params: params }), [params]);

  useEffect(() => {
    const request = dispatch(fetchQuestions(fetchOptions));
    dispatch(resetScore());

    return () => {
      request.abort();
    };
  }, [dispatch, fetchOptions]);

  let { questions, error, status, wrongQuestions } = useSelector((state) => state.questions);
  const showRetryWrongBtn = (wrongQuestions.length>0)? true : false;

  const handleParams = useCallback((params) => {
    setParams(params);
    dispatch(updateKidInfo(params));
    const data = {...JSON.parse(localStorage.getItem("kidGradeAndLevel")),...params};
    console.log("localStorage to set", data);
    localStorage.setItem("kidGradeAndLevel", JSON.stringify(data));

  }, []);

  const handleToggleSettings = ()=>{
    setShowSetting(!showSetting);
  }

  const handleRestart = ()=>{
    dispatch(fetchQuestions(fetchOptions));
  }

  const handleRetry = ()=>{
    dispatch(fetchWrongQuestions());
    questions = shuffleArray(wrongQuestions);
  }
    return (
        <div className="quiz-container">
          <h2><CalculateIcon /> Math Quiz
          <Tooltip title="Change mode and level settings">
            <IconButton className='setting-btn' onClick={handleToggleSettings}>
                <TuneIcon />
            </IconButton>
          </Tooltip>
          </h2> 
          {showSetting &&
          <ToolBox params={params} onChange={handleParams}/>
          }
          <DataRenderer error={error} isLoading={status === 'loading'}>
            {
            questions && 
            <QuizSection questions={questions} 
            showRetryWrongBtn = {showRetryWrongBtn}
            onRestart={handleRestart} 
            onRetry={handleRetry} 
            />}
          </DataRenderer>
        </div>
    );
}
 
export default QuizContainer;