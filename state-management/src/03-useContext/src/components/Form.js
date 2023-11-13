import { useContext, useRef } from 'react';
import { Context } from '../context';

const Form = () => {
  const ref = useRef();
  const value = useContext(Context);
  const { state, dispatch } = value;

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
    <div>
      <div className='p-2' style={{ width: '100%' }}>
        <div className='row'>
          <div className='col-8'>
            <span className='text-secondary h1 mb-2 mx-5'>
              {state.values.random1}
            </span>
            <span className='text-secondary h1 mb-2 mx-5'>
              {state.values.random2}
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
            ref={ref}
            className='form-control mb-4'
            type='number'
            onChange={(e) =>
              dispatch({ type: 'setGuess', payload: { guess: e.target.value } })
            }
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
  );
};

export default Form;
