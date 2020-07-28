import React from 'react';
import { getQuestions } from '../../utils/questions';
import QuestionStyle from './Style';

const Question = ({ match }) => {
  const { insuranceType } = match.params;
  const questions = getQuestions(insuranceType);
  return (
    <QuestionStyle>
      <h1 className='title'>Some Frequently Asked Questions & Answers</h1>
      <div className='body'>
        {questions.map((question, index) => (
          <div className='questionAndAnswer' key={index}>
            <p className='question'>
              <em>Question:</em> {question.question}?
            </p>
            <p className='answer'>
              <em>Answer:</em> {question.answer}.
            </p>
          </div>
        ))}
      </div>
      <section className='bottom-section'>
        <h2>Can't find your Answer</h2>
        <p>We would be glad to help you resolve your question</p>
        <div className='btn'>contact us</div>
      </section>
    </QuestionStyle>
  );
};

export default Question;
