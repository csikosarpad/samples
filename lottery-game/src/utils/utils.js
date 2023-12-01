import { GAMERULES } from './constans';

export const getStorage = (prop) => {
  return localStorage.getItem(prop) ?? null;
};

export const setStorage = ({ key, value }) => {
  localStorage.setItem(key, value);
};
export const removeItemFromStorage = (key) => {
  localStorage.removeItem(key);
};

export const getLottoLottery = () => {
  const maxNum = GAMERULES.MAXNUM - 1;
  const lottoSet = new Set();
  while (lottoSet.size < 5) {
    lottoSet.add(Math.round(Math.random() * maxNum) + 1);
  }
  return Array.from(lottoSet);
};

const summarize = ({ lotteryNumbers, voucher }) => {
  return lotteryNumbers.filter((item) => {
    const actVoucher = voucher?.voucher || voucher;
    return actVoucher.find((elem) => elem === item);
  });
};

export const setTicketToUsed = (data) => {
  return JSON.parse(JSON.stringify(data)).map((item) => {
    if (!item?.used) {
      return { used: true, voucher: item };
    } else {
      return item;
    }
  });
};

export const getResultsTickets = ({
  lotteryNumbers,
  vouchers,
  initTicketResults,
}) => {
  const initResults = JSON.parse(JSON.stringify(initTicketResults)) || [];
  let ticketResults = [];
  const notUsedVouchers = JSON.parse(
    JSON.stringify(vouchers.filter((item) => !item.used))
  );
  const nums = notUsedVouchers.length;
  const newItems = Array.from(Array(nums), () => []);
  notUsedVouchers.map(
    (item, index) =>
      (newItems[index] = [
        ...summarize({ lotteryNumbers: lotteryNumbers, voucher: item }),
      ])
  );
  ticketResults = initResults.concat(newItems);

  return ticketResults;
};

export const resetClass = () => {
  document
    .querySelectorAll('.ticket')
    .forEach((item) => item.classList.remove('selected'));
};

export const resetStorage = () => {
  const gamerVoucherNumbers = getStorage('gamerVoucherNumbers');
  for (let i = 1; i <= gamerVoucherNumbers; i++) {
    removeItemFromStorage(`ticket_${i}`);
  }
  removeItemFromStorage('gamerVoucherNumbers');
  removeItemFromStorage('gamerTotalPrice');
};

export const formatPrice = (price) => {
  let ret = new Intl.NumberFormat('en-EN', {
    maximumSignificantDigits: 3,
  }).format(price);

  return ret;
};
