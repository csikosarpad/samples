import { useReducer } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import '../../App.css';

/*
1 - generate two new random numbers
2 - Add the two random numbers together to get the sum
3 - Compare the sum to the user input
4 - If the sum is equal to the user input, display "You guessed right!"
5 - If the sum is not equal to the user input, display "Try Again :("
*/

const initialState = {
  values: { random1: 0, random2: 0 },
  guess: 0,
  result: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'setValues':
      return { ...state, values: action.payload.values };
    case 'setGuess':
      return { ...state, guess: action.payload.guess };
    case 'setResult':
      return { ...state, result: action.payload.result };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 50);
    const random2 = Math.floor(Math.random() * 50);
    dispatch({ type: 'setValues', payload: { values: { random1, random2 } } });
  };

  const guessYourTip = () => {
    dispatch({
      type: 'setResult',
      payload: { result: state.values.random1 + state.values.random2 },
    });
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
              values={state.values}
              generate={generateRandomNumbers}
              guess={guessYourTip}
              onChange={(value) =>
                dispatch({ type: 'setGuess', payload: { guess: value } })
              }
            />
            <Result result={state.result} guess={state.guess} />
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
