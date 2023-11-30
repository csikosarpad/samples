import { createSlice } from '@reduxjs/toolkit';
import {
  resetClass,
  resetStorage,
  getLottoLottery,
  setStorage,
  getResultsTickets,
} from '../utils/utils';
import { GAMER, BANK } from '../utils/constans';

const initialState = {
  ticketClickCounter: 0,
  lotteryRange: { minNum: 1, maxNum: 39 },
  ticketMaxTips: 5,
  tips: [],
  gamerTip: [],
  canPost: false,
  sentPost: false,
  lotteryNumbers: [],
  actPage: 'gamer',
  result: {},
  gamerName: '',
  gamerFinancialBalance: GAMER.FINANCIAL_BALANCE,
  bankFinancialBalance: BANK.FINANCIAL_BALANCE,
  gamerVouchers: [],
  gamerVoucherNumbers: 0,
  gamerTicketResults: [],
  gamerTotalPrice: 0,
};

const lotterySlice = createSlice({
  name: 'lottery',
  initialState: initialState,
  reducers: {
    setPage: (state, action) => {
      state.actPage = action.payload;
    },
    lotteryGame: (state) => {
      state.lotteryNumbers = getLottoLottery();
      state.gamerTicketResults = getResultsTickets({
        lotteryNumbers: state.lotteryNumbers,
        vouchers: state.gamerVouchers,
      });
      state.sentPost = true;
    },
    reset: () => {
      resetClass();
      resetStorage();
      return initialState;
    },
    setGamerName: (state, action) => {
      state.gamerName = action.payload;
    },
    setGamerTotalPrice: (state, action) => {
      state.gamerTotalPrice += action.payload;
    },
    sendTheTip: (state) => {
      const actTips = Array.from(state.tips);
      state.gamerVoucherNumbers++;
      state.gamerFinancialBalance -= GAMER.PRICE_OF_TICKET;
      state.bankFinancialBalance += GAMER.PRICE_OF_TICKET;
      state.gamerVouchers = [...state.gamerVouchers, actTips];
      setStorage({
        key: 'gamerVoucherNumbers',
        value: state.gamerVoucherNumbers,
      });
      setStorage({
        key: `ticket_${state.gamerVoucherNumbers}`,
        value: actTips,
      });
      state.canPost = false;
      state.tips = [];
      state.ticketClickCounter = 0;
      resetClass();
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

export const {
  setPage,
  addTicket,
  sendTheTip,
  lotteryGame,
  reset,
  setGamerName,
  setGamerTotalPrize,
} = lotterySlice.actions;

export default lotteryReducer;
