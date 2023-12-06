import React from 'react';

const TicketList = ({ tickets }) => {
  return (
    <>
      {tickets.map((ticket, ticketIndex) => {
        const listedTicket = ticket?.voucher || ticket;
        return (
          <li className='default' key={ticketIndex}>
            {listedTicket.map((item, itemIndex) => {
              return (
                <span key={itemIndex} className='tipp'>
                  {item}
                </span>
              );
            })}
          </li>
        );
      })}
    </>
  );
};

const GamerTickets = ({ vouchers }) => {
  return (
    <div className='vouchers-list'>
      {vouchers.length > 0 && (
        <>
          <h4>Purchased tickets</h4>
          <ol className='ticket vouchers'>
            <TicketList tickets={vouchers} />
          </ol>
        </>
      )}
    </div>
  );
};

export default GamerTickets;
