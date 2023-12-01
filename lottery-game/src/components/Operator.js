import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lotteryGame, reset } from '../redux/lotterySlice';

const Operator = () => {
  const dispatch = useDispatch();

  const gamerVouchers = useSelector((state) => state.gamerVouchers);

  const handleLottery = () => {
    dispatch(lotteryGame());
  };
  const handleNewPost = () => {
    dispatch(reset());
  };

  return (
    <>
      <h2>Operator</h2>

      <button
        className='new-game design-button reset-button'
        onClick={handleNewPost}
      >
        New Game
      </button>

      {/*!sentPost && gamerVouchers.length > 0 && (*/}
      {gamerVouchers.length > 0 && (
        <button className='play-the-game design-button' onClick={handleLottery}>
          Lotto Lottery
        </button>
      )}
    </>
  );
};

export default Operator;
