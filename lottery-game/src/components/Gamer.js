import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendTheTip,
  lotteryGame,
  reset,
  setGamerName,
} from '../redux/lotterySlice';

import TicketDraw from './TicketDraw';
import GamerResultsBoard from './GamerResultsBoard';
import { getStorage, setStorage, formatPrice } from '../utils/utils';
import { GAMER } from '../utils/constans';

const Gamer = () => {
  const dispatch = useDispatch();
  const tips = useSelector((state) => state.tips);
  const canPost = useSelector((state) => state.canPost);
  const sentPost = useSelector((state) => state.sentPost);
  const result = useSelector((state) => state.result);
  const lotteryNumbers = useSelector((state) => state.lotteryNumbers);
  const gamerName = useSelector(
    (state) => state.gamerName || getStorage(GAMER.NAME)
  );
  const gamerVouchers = useSelector((state) => state.gamerVouchers);
  const gamerTicketResults = useSelector((state) => state.gamerTicketResults);
  const gamerFinancialBalance = useSelector(
    (state) => state.gamerFinancialBalance
  );
  const bankFinancialBalance = useSelector(
    (state) => state.bankFinancialBalance
  );

  const handleSend = () => {
    dispatch(sendTheTip());
  };

  const handleNewPost = () => {
    dispatch(reset());
  };
  const handleLottery = () => {
    dispatch(lotteryGame());
  };

  const handleGamerName = (event) => {
    event.preventDefault();
    const newName = document.querySelector(`#${GAMER.NAME}`).value;
    dispatch(setGamerName(newName));
    setStorage({ key: GAMER.NAME, value: newName });
  };

  return (
    <>
      {!gamerName && (
        <>
          <input
            type='text'
            name={GAMER.NAME}
            id={GAMER.NAME}
            value={getStorage(GAMER.NAME)}
          />
          <button onClick={handleGamerName}>Set your name</button>
        </>
      )}
      <h3>
        {gamerName && (
          <span>
            {gamerName}{' '}
            <i>
              {formatPrice(gamerFinancialBalance)} {GAMER.CURRENCY}
            </i>
          </span>
        )}{' '}
        - BANK:{' '}
        <i>
          {formatPrice(bankFinancialBalance)} {GAMER.CURRENCY}
        </i>
      </h3>

      <p className='your-tips'>
        {tips.map((item) => {
          return <i className='tip'>{item}</i>;
        })}
      </p>
      {lotteryNumbers && (
        <p className='lottery-numbers'>{lotteryNumbers.toString()}</p>
      )}
      {result.talalat && (
        <p className='result'>
          {result.message} - {result.szamok.toString()}
        </p>
      )}
      <div className='tickets-place'>
        {gamerVouchers && (
          <>
            <GamerResultsBoard
              vouchers={gamerVouchers}
              ticketResults={gamerTicketResults}
            />
          </>
        )}
        <TicketDraw />
      </div>
      {canPost && (
        <button className='send-ticket design-button' onClick={handleSend}>
          Buy ticket{' '}
          <span className='price-of-ticket'>
            {GAMER.PRICE_OF_TICKET} {GAMER.CURRENCY}{' '}
          </span>
          and Send
        </button>
      )}

      <button
        className='new-game design-button reset-button'
        onClick={handleNewPost}
      >
        New Game
      </button>

      {!sentPost && gamerVouchers.length > 0 && (
        <button className='play-the-game design-button' onClick={handleLottery}>
          Lotto Lottery
        </button>
      )}
    </>
  );
};
export default Gamer;
