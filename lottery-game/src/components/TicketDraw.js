import { useDispatch, useSelector } from 'react-redux';
import { addTicket } from '../redux/lotterySlice';
import { useState, useEffect } from 'react';

const TicketDraw = () => {
  const tips = useSelector((state) => state.tips);
  const canPost = useSelector((state) => state.canPost);
  const sentPost = useSelector((state) => state.sentPost);
  const ticketMaxTips = useSelector((state) => state.ticketMaxTips);
  const lotteryRange = useSelector((state) => state.lotteryRange);

  const dispatch = useDispatch();
  const tickets = [];
  const maxNumber = lotteryRange.maxNum;

  const panelClassName = canPost ? 'tickets fill' : 'tickets';

  let iterator = lotteryRange.minNum;
  while (iterator <= maxNumber) {
    const ticketItem = { itemIndex: iterator, ticketClassName: 'ticket' };
    tickets.push(ticketItem);
    iterator++;
  }

  const handleTicket = (ev) => {
    dispatch(addTicket(ev.target.id));
  };

  useEffect(() => {
    console.log('sentPost - effect', sentPost);
  }, [sentPost]);

  return (
    <div className={panelClassName}>
      {tickets.map((item) => {
        const { itemIndex, ticketClassName } = item;
        const ticketId = `ticket_${itemIndex}`;
        return (
          <div
            tabIndex={itemIndex}
            className={ticketClassName}
            key={itemIndex}
            id={ticketId}
            onClick={handleTicket}
          >
            {itemIndex}
          </div>
        );
      })}
    </div>
  );
};

export default TicketDraw;
