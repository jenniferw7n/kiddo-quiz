import { useState } from 'react';

const questions = {
  Math: [
    { question: 'What is 1 + 1?', options: ['1', '2', '3'], answer: '2' },
    { question: 'What is 2 - 1?', options: ['1', '2', '3'], answer: '1' },
  ],
  Reading: [
    { question: 'What is this letter?', options: ['A', 'B', 'C'], answer: 'A' },
    { question: 'What is this word?', options: ['Cat', 'Dog', 'Fish'], answer: 'Cat' },
  ],
};

function QuizScreen({ quizType, onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const question = questions[quizType][currentQuestionIndex];

  const handleAnswer = (answer) => {
    if (answer === question.answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions[quizType].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz completed! Your score is ${score + (answer === question.answer ? 1 : 0)} out of ${questions[quizType].length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="quiz-screen">
      <button onClick={onBack}>Back</button>
      <h2>{quizType} Quiz</h2>
      <p>{question.question}</p>
      <div>
        {question.options.map(option => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizScreen;
