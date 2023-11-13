const Form = ({ values, generate, guess, onChange }) => {
  return (
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
            onClick={generate}
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
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <div className='col-4'>
          <button
            type='button'
            className='btn btn-info text-light'
            style={{ width: '100%' }}
            onClick={guess}
          >
            your tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
