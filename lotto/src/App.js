import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from './redux/lotterySlice';
import Operator from './components/Operator';
import Gamer from './components/Gamer';
import './assets/application.scss';

const Menu = () => {
  const dispatch = useDispatch();

  const handleSetPage = (ev) => {
    dispatch(setPage(ev.target.id));
  };

  return (
    <>
      <header>
        <nav>
          <span
            id='gamer'
            onClick={handleSetPage}
            className='icon icon-person icon-gamer'
          >
            <i>Gamer</i>
          </span>
          <span
            id='operator'
            onClick={handleSetPage}
            className='icon icon-person icon-operator'
          >
            <i>Operator</i>
          </span>
        </nav>
      </header>
    </>
  );
};

const Application = () => {
  return (
    <>
      <h2>Application</h2>
    </>
  );
};

const App = () => {
  const actPage = useSelector((state) => state.actPage);

  return (
    <div className='App'>
      <Menu />
      <main>
        {!actPage && <Application />}
        {actPage === 'operator' && <Operator />}
        {actPage === 'gamer' && <Gamer />}
      </main>
    </div>
  );
};

export default App;
