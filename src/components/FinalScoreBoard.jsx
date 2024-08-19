import SportsScoreIcon from '@mui/icons-material/SportsScore';
import '@/css/FinalScoreBoard.scss'

const FinalScoreBoard = ({currentScore, questionsLength}) => {
    const score = Math.round(currentScore/questionsLength*100);
    return (  
     <div className="final-score-board">
        <div className='final-score'>
            <SportsScoreIcon className='icon'/>
            <span className={'score'}>Score: {currentScore} / {questionsLength} ({score} %)
            </span>
        </div>
        {(score==100) && <span>Wow! You nailed it! Perfect score!</span>}
        {(score>=90)&& <span>Great Job!</span>}
        {(score<90 && score>=70) && <span>You did great but probaly can do even better!</span>}
        {(score<70) && <span>Try again and you might get a better score!</span>}
      </div>
    );
}
 
export default FinalScoreBoard;