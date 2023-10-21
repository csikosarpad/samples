import { useState } from 'react';
import '../../App.css';

/*
1 - generate two new random numbers
2 - Add the two random numbers together to get the sum
3 - Compare the sum to the user input
4 - If the sum is equal to the user input, display "You guessed right!"
5 - If the sum is not equal to the user input, display "Try Again :("
*/

function App() {
  const [values, setValues] = useState(0);
  const [guess, setGuess] = useState(0);
  const [message, setMessage] = useState('');

  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 100);
    const random2 = Math.floor(Math.random() * 100);
    setValues({ random1, random2 });
  };

  const guessYourTip = () => {
    const message =
      parseInt(guess) === values.random1 + values.random2
        ? 'Your guessed right!'
        : 'Try again!';
    setMessage(message);
  };

  return (
    <div className='App'>
      <div className='p-5'>
        <fieldset>
          <legend className='text-bold'>Guess the Number</legend>
          <div className='d-flex justify-content-around'>
            <div>
              <div className='p-2' style={{ width: '100%' }}>
                <div className='row'>
                  <div className='col-8'>
                    <span className='text-secondary h1 mb-2 mx-5'>
                      {values.random1}
                    </span>
                    <span className='text-secondary h1 mb-2 mx-5'>
                      {values.random2}
                    </span>
                  </div>
                  <button
                    className='col-4 btn btn-info text-light btn-sm'
                    onClick={generateRandomNumbers}
                  >
                    generate
                  </button>
                </div>
              </div>
              <form className='py-4 row g-0'>
                <div className='col-8 px-2'>
                  <input
                    className='form-control mb-4'
                    type='number'
                    onChange={(e) => setGuess(e.target.value)}
                  />
                </div>
                <div className='col-4'>
                  <button
                    type='button'
                    className='btn btn-info text-light'
                    style={{ width: '100%' }}
                    onClick={guessYourTip}
                  >
                    your tip
                  </button>
                </div>
              </form>
            </div>
            <div className='d-flex flex-column justify-content-between'>
              <div className='d-flex text-success justify-content-center mb-5'>
                <p className='h1'>{message}</p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
