import { useDispatch, useSelector } from 'react-redux';
import {
  sendTheTip,
  lotteryGame,
  reset,
  setGamerName,
} from '../redux/lotterySlice';

import TicketDraw from './TicketDraw';
import { getStorage, setStorage, formatPrice } from '../utils/utils';
import { GAMER } from '../utils/constans';

const SentTickets = ({ vouchers }) => {
  if (Array.isArray(vouchers)) {
    return (
      <ol className='vouchers'>
        {vouchers.map((voucher, voucherIndex) => {
          return (
            <li key={voucherIndex}>
              {voucher.map((item, numIndex) => {
                return (
                  <span key={numIndex} className='tipp'>
                    {item}
                  </span>
                );
              })}
            </li>
          );
        })}
      </ol>
    );
  }
};

const Gamer = () => {
  const dispatch = useDispatch();
  const tips = useSelector((state) => state.tips);
  const canPost = useSelector((state) => state.canPost);
  const result = useSelector((state) => state.result);
  const gamerName = useSelector(
    (state) => state.gamerName || getStorage(GAMER.NAME)
  );
  const gamerVouchers = useSelector((state) => state.gamerVouchers);
  const gamerTicketResults = useSelector((state) => state.gamerTicketResults);
  const gamerFinancialBalance = useSelector(
    (state) => state.gamerFinancialBalance
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
      {gamerName && (
        <h3>
          {gamerName} <span>{formatPrice(gamerFinancialBalance)}</span>
        </h3>
      )}

      <p className='your-tips'>
        {tips.map((item) => {
          return <i className='tip'>{item}</i>;
        })}
      </p>
      {result.talalat && (
        <p className='result'>
          {result.message} - {result.szamok.toString()}
        </p>
      )}
      <div className='tickets-place'>
        {gamerVouchers && (
          <>
            <p>{gamerTicketResults}</p>
            <SentTickets vouchers={gamerVouchers} />
          </>
        )}
        <TicketDraw />
      </div>
      {canPost && (
        <button className='send-ticket' onClick={handleSend}>
          You can send your lottery ticket!
        </button>
      )}
      <button className='new-ticket' onClick={handleNewPost}>
        newGame
      </button>
      <button className='new-ticket' onClick={handleLottery}>
        Lotto Lottery
      </button>
    </>
  );
};
export default Gamer;
