const Result = ({ result }) => {
  return (
    <div className='d-flex flex-column justify-content-between'>
      <div className='d-flex text-success justify-content-center mb-5'>
        <p className='h1'>{result}</p>
      </div>
    </div>
  );
};

export default Result;
