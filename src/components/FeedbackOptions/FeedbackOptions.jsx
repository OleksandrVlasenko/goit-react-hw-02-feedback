import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackKeys = Object.keys(options);

  return (
    <div>
      {feedbackKeys.map(option => {
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
};
