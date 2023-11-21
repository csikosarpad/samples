import { createSlice } from '@reduxjs/toolkit';

const lottoLottery = () => {
  const lottoSet = new Set();
  while (lottoSet.size < 5) {
    lottoSet.add(Math.ceil(Math.random() * 39) + 1);
  }
  return Array.from(lottoSet);
};

const osszesit = ({ lottoszamok, szelveny }) => {
  return lottoszamok.filter((item) => szelveny.find((elem) => elem === item));
};

const eredmeny = ({ lottoszamok, szelveny }) => {
  const temp = osszesit({ lottoszamok, szelveny });
  let message = temp.length > 1 ? 'Ön nyert!' : 'Nem nyert!';
  return {
    szamok: temp,
    talalat: temp.length,
    message: message,
  };
};

/*const emberi = ({ lottoszamok, szelveny }) => {
  const vegeredmeny = eredmeny({ lottoszamok, szelveny });
  console.log(
    `A sorsolás eredménye: ${vegeredmeny.message}, mivel összesen ${vegeredmeny.talalat} számot talált el, melyek: ${vegeredmeny.szamok}`
  );
};*/

const initialState = {
  ticketClickCounter: 0,
  lotteryRange: { minNum: 1, maxNum: 39 },
  ticketMaxTips: 5,
  tips: [],
  gamerTip: [],
  canPost: false,
  sentPost: false,
  lottoSzamok: lottoLottery(),
  actPage: 'gamer',
  eredmeny: {},
};
const lotterySlice = createSlice({
  name: 'lottery',
  initialState: initialState,

  reducers: {
    setPage: (state, action) => {
      state.actPage = action.payload;
    },
    lottoSorsolas: () => {
      this.state.lottoSzamok = lottoLottery();
    },
    reset: () => {
      document
        .querySelectorAll('.ticket')
        .forEach((item) => item.classList.remove('selected'));
      return initialState;
    },
    sendTheTip: (state) => {
      state.eredmeny = eredmeny({
        lottoszamok: state.lottoSzamok,
        szelveny: state.tips,
      });
      state.sentPost = true;
      state = state.initialState;
    },
    addTicket: (state, action) => {
      const element = document.querySelector(`#${action.payload}`);
      const currentTip = parseInt(element.textContent);
      const isExisting = state.tips.includes(currentTip);

      if (!isExisting && state.ticketClickCounter < state.ticketMaxTips) {
        state.ticketClickCounter++;
        state.tips = [...state.tips, currentTip];
        element.classList.add('selected');
      } else if (isExisting) {
        state.tips = state.tips.filter((item) => item !== currentTip);
        element.classList.remove('selected');
        state.ticketClickCounter--;
      }
      state.canPost = state.ticketClickCounter === 5;
    },
  },
});

const lotteryReducer = lotterySlice.reducer;
export const { setPage, addTicket, sendTheTip, reset } = lotterySlice.actions;

export default lotteryReducer;
