import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, error, changeHandler, submitHandler } = useGlobalContext();

  return (
    <section className="quiz quiz-small">
      <form className="setup-form" onSubmit={submitHandler}>
        <h2>setup questions</h2>
        <div className="form-control">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            min="1"
            max="50"
            className="form-input"
            name="amount"
            value={quiz.amount}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            value={quiz.category}
            onChange={changeHandler}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="form-input"
            value={quiz.difficulty}
            onChange={changeHandler}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && (
          <p className="error">
            can not generate questions, please try different options
          </p>
        )}
        <button type="submit" className="submit-btn">
          start
        </button>
      </form>
    </section>
  );
};

export default SetupForm;
