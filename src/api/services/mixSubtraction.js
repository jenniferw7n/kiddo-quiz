import {getRandomItemInArray} from '@/lib/utils/getRandomItemInArray';
import { shuffleArray } from '@/lib/utils/shuffleArray';

const randomAddSubtraction = (level) =>{
  let questionAndAnswerOptions =[];
  let question = "";
  let answer;
  const a = Math.floor(Math.random()*10); 
  const b = Math.floor(Math.random()*10); 
  const c = Math.floor(Math.random() * 16) + 5;
  const d = Math.floor(Math.random() * 16) + 5;
  const e = Math.floor(Math.random()*100);
  const f = Math.floor(Math.random()*100);

  const simpleSubtraction = (a>b)?
  {
    question: `${a}-${b} = ?`,
    answer: a-b
  }: {
    question: `${b}-${a} = ?`,
    answer: b-a
  };
  switch(Number(level)) {
    case 1:
     questionAndAnswerOptions = shuffleArray([
        simpleSubtraction,
        { question: `${a}+${b} = ?`,
          answer: a+b
        },
    ]);
    question= questionAndAnswerOptions[0].question;
    answer = questionAndAnswerOptions[0].answer;
    break;
    case 2 :
      questionAndAnswerOptions = shuffleArray([
        {question: `${e}-${c} = ?`,
          answer: e-c
        },
        {question: `${e}+${f} = ?`,
          answer: e+f
        },
        {question: `${c}-${b}+${a} = ?`,
          answer: c-b+a
        },
        {question: `${c}+${b}-${a} = ?`,
        answer: c+b-a
        },
        { question: `${c}-${b}-${a} = ?`,
          answer: c-b-a
        },
      ]);
      question= questionAndAnswerOptions[0].question
      answer = questionAndAnswerOptions[0].answer;
    break;
    case 3 :
      questionAndAnswerOptions =  shuffleArray([
        { question: `${c}-(${b}-${a}) = ?`,
          answer: c-(b-a)
        },
        { question: `${c}-(${b}+${a}) = ?`,
          answer: c-(b+a)
        },
        { question: `${c}+(${b}-${a}) = ?`,
          answer: c+(b-a)
        },
        {question: `${e}-${d}+${c} = ?`,
          answer: e-d+c
        },
        {question: `${e}+${d}-${c} = ?`,
          answer: e+d-c
        },
        {question: `${e}-${f} = ?`,
          answer: e-f
        },
      ]);
      question= questionAndAnswerOptions[0].question
      answer = questionAndAnswerOptions[0].answer;
    break;
    default:
      question = simpleSubtraction.question;
      answer = simpleSubtraction.answer;
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

export default randomAddSubtraction;