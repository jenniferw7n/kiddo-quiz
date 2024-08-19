import { shuffleArray } from '@/lib/utils/shuffleArray';
import {getRandomItemInArray} from '../../lib/utils/getRandomItemInArray';

const randomAddition = (level) =>{
  const a = Math.floor(Math.random()*10);
  const b = Math.floor(Math.random()*10);
  let question = `${a}+${b} = ?`;
  let answer = a+b;
  
  if(level>=2){//need another number
   const c = Math.floor(Math.random()*10);
   question = `${a}+${b}+${c} = ?`;
   answer = a+b+c;
  }

  if(level>=3){//turn one number into a 1-100
    // 5 -> 20
    const e = Math.floor(Math.random() * 16) + 5;
    const d = Math.floor(Math.random()*100);
    question = `${e}+${b}+${d} = ?`;
    answer = e+b+d;

  }

  const randomShifterNum = getRandomItemInArray([2,3,4]);
  const options = shuffleArray([
    {
      id: 1,
      value: answer
    }, 
    {
      id: 2,
      value: answer+1
    }, 
    {
      id: 3,
      value: answer+randomShifterNum
    }, 
    {
      id: 4,
      value: answer-1
    }, 
  ]);

  return {question, answer, options};
}

export default randomAddition;