import React, { useState} from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';
import { QuestionState , Difficulty } from './API'

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;



function App() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers]= useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver]= useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY ))

  const startTrivia = async () =>{

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  };

  const nextQuestion = () => {

  };

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
          START QUIZ
      </button>
      <p className= "score">SCORE:</p>
     { /*<QuestionCard 
      questionNr={number +1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers= {questions[number].answers}
      userAnswer= {userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
     />*/}
      <button className="next" onClick={nextQuestion}>
            NEXT QUESTION
      </button>
          
    </div>

    
  );
}

export default App;
