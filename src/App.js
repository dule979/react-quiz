import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    answerQuestion,
    isModalOpen,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];
  let answers = [...incorrect_answers];
  const randomIndex = Math.ceil(Math.random() * 3);
  if (randomIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[randomIndex]);
    answers[randomIndex] = correct_answer;
  }

  return (
    <main>
      {isModalOpen && <Modal />}
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correct} / {index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                type="button"
                dangerouslySetInnerHTML={{ __html: answer }}
                className="answer-btn"
                onClick={() => answerQuestion(correct_answer === answer)}
              />
            );
          })}
        </article>
        <button type="button" className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
