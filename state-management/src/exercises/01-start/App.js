import '../../App.css';

/*
1 - generate two new random numbers
2 - Add the two random numbers together to get the sum
3 - Compare the sum to the user input
4 - If the sum is equal to the user input, display "You guessed right!"
5 - If the sum is not equal to the user input, display "Try Again :("
*/

function App() {
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
                    <span className='text-secondary h1 mb-2 mx-5'>random1</span>
                    <span className='text-secondary h1 mb-2 mx-5'>random2</span>
                  </div>
                  <button className='col-4 btn btn-info text-light btn-sm'>
                    generate
                  </button>
                </div>
              </div>
              <form className='py-4 row g-0'>
                <div className='col-8 px-2'>
                  <input className='form-control mb-4' type='number' />
                </div>
                <div className='col-4'>
                  <button
                    type='button'
                    className='btn btn-info text-light'
                    style={{ width: '100%' }}
                  >
                    your tip
                  </button>
                </div>
              </form>
            </div>
            <div className='d-flex flex-column justify-content-between'>
              <div className='d-flex text-success justify-content-center mb-5'>
                <p className='h1'>You guessed right!</p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
