import { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

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
  const [result, setResult] = useState(0);

  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 100);
    const random2 = Math.floor(Math.random() * 100);
    setValues({ random1, random2 });
  };

  const guessYourTip = () => {
    setResult(values.random1 + values.random2);
  };

  return (
    <div className='App'>
      <div className='p-5'>
        <fieldset>
          <legend className='text-bold'>
            Guess the Number - <span>useEffect</span>
          </legend>
          <div className='d-flex justify-content-around'>
            <Form
              values={values}
              generate={generateRandomNumbers}
              guess={guessYourTip}
              onChange={setGuess}
            />
            <Result result={result} guess={guess} />
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
