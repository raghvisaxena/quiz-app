import React from 'react';

type Props = {
    question: any;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;

}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
<div>
    <p className="number">
        Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question}}></p>
    <div>
        {answers.map((answer) =>(
            <div key={answer}>
            <div>
                <button disabled={userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer}}/>
                </button>
            </div>
            </div>
        ))}
    </div>
</div>
);


export default QuestionCard;