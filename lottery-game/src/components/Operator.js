import React, { useState } from 'react';
import { GAMERULES } from '../utils/constans';
import { getLottoLottery, loadFromStorage } from '../utils/utils';

import { useDispatch, useSelector } from 'react-redux';
import {
  lotteryGame,
  reset,
  setBankFinancialBalance,
  setGamerFinancialBalanceState,
  setGamerName,
  setGamerTicketResults,
  setGamerUsedVouchers,
  setGamerVoucherNumbers,
  setGamerVouchers,
} from '../redux/lotterySlice';
import { formatPrice } from '../utils/utils';

const Operator = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [newGamer, setNewGamer] = useState([]);

  const gamerVouchers = useSelector((state) => state.gamerVouchers);
  const bankFinancialBalance = useSelector(
    (state) => state.bankFinancialBalance
  );

  let gamers = [];

  const onStorageLoadHandler = () => {
    const requiredStorageContent = loadFromStorage();
    Object.entries(requiredStorageContent).forEach((item) => {
      const key = item[0];
      const values = item[1];
      switch (key) {
        case 'gamerName':
          dispatch(setGamerName(values));
          break;
        case 'gamerVoucherNumbers':
          dispatch(setGamerVoucherNumbers(values));
          break;
        case 'gamerVouchers':
          dispatch(setGamerVouchers(values));
          break;
        case 'gamerTicketResults':
          dispatch(setGamerTicketResults(values));
          break;
        case 'gamerUsedVouchers':
          dispatch(setGamerUsedVouchers(values));
          break;
        case 'bankFinancialBalance':
          dispatch(setBankFinancialBalance(parseInt(values)));
          break;
        case 'gamerFinancialBalance':
          dispatch(setGamerFinancialBalanceState(parseInt(values)));
          break;
      }
    });
  };

  const handleLottery = () => {
    dispatch(lotteryGame());
  };

  const handleNewPost = () => {
    dispatch(reset());
  };

  const onHandleNewModal = (event) => {
    setModal(!modal);
  };
  const onHandleNewGamer = (event) => {
    const newGamerName = document.querySelector('#newgamer-name').value;
    const newGamerTickets = parseInt(
      document.querySelector('#newgamer-tickets').value
    );
    setModal(false);
    const ticketTips = [];
    let actualItem = 0;
    while (actualItem < newGamerTickets) {
      actualItem++;
      ticketTips.push(getLottoLottery());
    }
    const actualGamer = {
      name: newGamerName,
      ticketNumbers: ticketTips,
    };
    const existedGamer = gamers.find((item) => item.name === newGamerName);
    existedGamer ? console.log('letezik') : (gamers = [...gamers, actualGamer]);

    setNewGamer(gamers);
  };

  return (
    <>
      <h2>Operator</h2>
      <h3>
        Bank:{' '}
        <i>
          {formatPrice(bankFinancialBalance)} {GAMERULES.CURRENCY}
        </i>
      </h3>

      <button
        className='new-game design-button reset-button'
        onClick={handleNewPost}
      >
        New Game
      </button>

      {gamerVouchers.length > 0 && (
        <button className='play-the-game design-button' onClick={handleLottery}>
          Lotto Lottery
        </button>
      )}
      <div className='tickets-place operator'>
        <button
          className='new-gamer design-button-little'
          onClick={onHandleNewModal}
        >
          New Virtual Gamer
        </button>
        {modal && (
          <div className='new-gamer-form'>
            <label>
              New Virtual Gamer Name:
              <input
                type='text'
                placeholder={newGamer.name}
                id='newgamer-name'
              />
            </label>
            <br />
            <label>
              The number of the player's tickets:
              <input type='number' placeholder='1' id='newgamer-tickets' />
            </label>
            <button
              className='new-gamer design-button-little'
              onClick={onHandleNewGamer}
            >
              Add User
            </button>
          </div>
        )}
        {newGamer.toString()}
        <button onClick={onStorageLoadHandler}>Load</button>
      </div>
    </>
  );
};

export default Operator;
