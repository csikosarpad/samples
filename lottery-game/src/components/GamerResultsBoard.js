import React, { useEffect, useState } from 'react';
import { GAMERULES, GAMER } from '../utils/constans';
import { setStorage } from '../utils/utils';
import { useDispatch } from 'react-redux';
import { setGamerTotalPrice } from '../redux/lotterySlice';

const currentPrize = (num) => {
  let result = GAMERULES.WINS.filter((item) => {
    return item.hit === num ? item : 0;
  });
  return result[0]?.prize || 0;
};

const decSort = (item1, item2) => item1.ticketPrize - item2.ticketPrize;
const ascSort = (item1, item2) => item2.ticketPrize - item1.ticketPrize;

const setList = ({ vouchers, ticketResults }) => {
  if (Array.isArray(vouchers)) {
    const returnList = vouchers.map((voucher, voucherIndex) => {
      const tipHits = ticketResults.ticketResults[voucherIndex]?.length || 0;
      const currentTicketPrize =
        currentPrize(tipHits) * GAMERULES.PRICE_OF_TICKET;
      const oneTicket = {
        numbers: voucher,
        hits: ticketResults.ticketResults[voucherIndex],
        ticketPrize: currentTicketPrize,
      };
      return oneTicket;
    });
    return returnList;
  }
};

const TicketList = ({ tickets }) => {
  return (
    <>
      {tickets.map((ticket, ticketIndex) => {
        const { numbers, hits, ticketPrize } = ticket;
        const listClassName = hits?.length >= 2 ? 'win' : 'default';
        const line = numbers?.voucher || numbers;
        return (
          <li className={listClassName} key={ticketIndex}>
            {line.map((item, itemIndex) => {
              const numberCellClassName = hits?.includes(item)
                ? 'tipp hit'
                : 'tipp';

              return (
                <span key={itemIndex} className={numberCellClassName}>
                  {item}
                </span>
              );
            })}
            <span className='tipp ticket-prize'>{ticketPrize}</span>
          </li>
        );
      })}
    </>
  );
};

const GamerResultsBoard = ({ vouchers, ticketResults }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState(false);
  const [newList, setNewList] = useState([]);

  const onHandleVouchersList = () => {
    setOrder(!order);
    order ? newList.sort(decSort) : newList.sort(ascSort);
  };

  const gamerCurrentTotalPrice = newList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.ticketPrize,
    0
  );

  useEffect(() => {
    setStorage({ key: 'gamerTotalPrice', value: gamerCurrentTotalPrice });
    dispatch(setGamerTotalPrice(gamerCurrentTotalPrice));
  }, [gamerCurrentTotalPrice]);

  useEffect(() => {
    setNewList(setList({ vouchers, ticketResults }));
  }, [vouchers, ticketResults]);

  const hasResult = () => {
    return gamerCurrentTotalPrice > 0;
  };

  const hasResultClassName = () => {
    return hasResult()
      ? 'vouchers-list played-tickets has-results'
      : 'vouchers-list played-tickets';
  };

  return (
    <div className={hasResultClassName()}>
      {hasResult() && (
        <ul className='ticket summary'>
          <li>
            Your total winnings:
            <span>
              {gamerCurrentTotalPrice} {GAMER.CURRENCY}
            </span>
          </li>
        </ul>
      )}

      {vouchers.length > 0 && (
        <>
          <h4 className={order ? 'desc' : 'asc'} onClick={onHandleVouchersList}>
            Your results list
          </h4>
          <ol className='ticket vouchers'>
            <TicketList tickets={newList} />
          </ol>
        </>
      )}
    </div>
  );
};

export default GamerResultsBoard;
