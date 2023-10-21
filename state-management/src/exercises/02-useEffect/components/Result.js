import { useEffect, useState } from 'react';

const Result = ({ result, guess }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const answer =
      parseInt(guess) === result ? 'Your guessed right!' : 'Try again!';
    setMessage(answer);
    if (!result) {
      setMessage('');
    }
  }, [guess, result]);

  return (
    <div className='d-flex flex-column justify-content-between'>
      <div className='d-flex text-success justify-content-center mb-5'>
        <p className='h1'>{message}</p>
      </div>
    </div>
  );
};

export default Result;
