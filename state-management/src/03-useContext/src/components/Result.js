import { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

const Result = () => {
  const [message, setMessage] = useState('');
  const value = useContext(Context);
  const { state } = value;
  const { guess, result } = state;

  useEffect(() => {
    let answer;
    if (guess && result) {
      answer =
        parseInt(guess) === result ? 'Your guessed right!' : 'Try again!';
    } else {
      answer = '';
    }
    setMessage(answer);
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
