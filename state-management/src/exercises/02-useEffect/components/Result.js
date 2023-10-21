const Result = ({ message }) => {
  return (
    <div className='d-flex flex-column justify-content-between'>
      <div className='d-flex text-success justify-content-center mb-5'>
        <p className='h1'>{message}</p>
      </div>
    </div>
  );
};

export default Result;
