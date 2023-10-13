import React from 'react';

function Banner({status, answer, guesses}) {
    const winningMessage = (
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses} guesses</strong>.
      </p>
  )

  const losingMessage = (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  )

  if(status === 'running') return null;

  return <div className={`${status === 'won' ? 'happy' : 'sad'} banner`}>
    {status === 'won' && winningMessage}
    {status === 'lost' && losingMessage}
  </div>;
}

export default Banner;
