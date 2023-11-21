import { useDispatch, useSelector } from 'react-redux';
import { sendTheTip, reset } from '../redux/lotterySlice';

import TicketDraw from './TicketDraw';

const Gamer = () => {
  const dispatch = useDispatch();

  const tips = useSelector((state) => state.tips);
  const canPost = useSelector((state) => state.canPost);
  const sentPost = useSelector((state) => state.sentPost);
  const eredmeny = useSelector((state) => state.eredmeny);

  const handleSend = () => {
    dispatch(sendTheTip());
  };

  const handleNewPost = () => {
    dispatch(reset());
  };

  return (
    <>
      <p className='your-tips'>
        {tips.map((item) => {
          return <i className='tip'>{item}</i>;
        })}
      </p>
      {eredmeny.talalat && (
        <p>
          {eredmeny.message} - {eredmeny.szamok.toString()}
        </p>
      )}
      <TicketDraw />
      {canPost && (
        <button className='send-ticket' onClick={handleSend}>
          You can send your lottery ticket!
        </button>
      )}
      <button className='new-ticket' onClick={handleNewPost}>
        newGame
      </button>
    </>
  );
};
export default Gamer;
