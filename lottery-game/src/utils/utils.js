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
  return jsonParse(data).map((item) => {
    if (!item?.used) {
      return { used: true, voucher: item };
    } else {
      return item;
    }
  });
};

export const setGamerFinancialBalance = ({
  gamerFinancialBalance,
  gamerTicketResults,
}) => {
  const winners = GAMERULES.WINS;
  const priceOfTicket = GAMERULES.PRICE_OF_TICKET;
  const { newItems } = gamerTicketResults;

  const wins = newItems
    .filter((item) => item.length > 1)
    .map((item) => item.length);

  const currentPrize = wins.reduce((accumulator, currentvalue) => {
    const hitValue = winners.find((item) => item.hit === currentvalue);
    const calculatedValue = hitValue.prize * priceOfTicket;
    return accumulator + calculatedValue;
  }, 0);
  return gamerFinancialBalance + currentPrize;
};

const jsonParse = (obj) => JSON.parse(JSON.stringify(obj));

const saveToStorage = ({ saveObject, keyPrefix, initialValue }) => {
  if (Array.isArray(saveObject)) {
    saveObject.forEach((item, index) => {
      index += initialValue;
      setStorage({ key: `${keyPrefix}${index}`, value: item });
    });
  }
};

export const getResultsTickets = ({
  lotteryNumbers,
  vouchers,
  storedTicketResults,
}) => {
  const initResults =
    jsonParse(storedTicketResults)?.ticketResults?.length > 0
      ? jsonParse(storedTicketResults)
      : {
          ticketResults: [],
          newItems: [],
        };
  let ticketResults = [];
  const notUsedVouchers = jsonParse(vouchers).filter((item) => !item.used);
  const nums = notUsedVouchers.length;
  const newItems = Array.from(Array(nums), () => []);
  notUsedVouchers.map(
    (item, index) =>
      (newItems[index] = [
        ...summarize({ lotteryNumbers: lotteryNumbers, voucher: item }),
      ])
  );
  ticketResults = initResults.ticketResults.concat(newItems);
  saveToStorage({
    saveObject: ticketResults,
    keyPrefix: 'result_',
    initialValue: 1,
  });

  return {
    ticketResults,
    newItems,
  };
};

export const resetClass = () => {
  document
    .querySelectorAll('.ticket')
    .forEach((item) => item.classList.remove('selected'));
};

const convertToInt = (stringArray) => {
  if (Array.isArray(stringArray) && stringArray[0].length > 0) {
    return stringArray.map((item) => parseInt(item));
  } else {
    return [];
  }
};

export const loadFromStorage = () => {
  const gamerName = getStorage('lotteryGamer');
  const gamerVoucherNumbers = parseInt(getStorage('gamerVoucherNumbers'));
  const gamerVouchers = [];
  const gamerTicketResults = {
    ticketResults: [],
  };
  const gamerUsedVouchers = [];

  for (let i = 1; i <= gamerVoucherNumbers; i++) {
    if (getStorage(`result_${i}`) !== null) {
      gamerTicketResults.ticketResults.push(
        convertToInt(getStorage(`result_${i}`).split(','))
      );
      gamerUsedVouchers.push({
        used: true,
        voucher: convertToInt(getStorage(`ticket_${i}`).split(',')),
      });
      gamerVouchers.push({
        used: true,
        voucher: convertToInt(getStorage(`ticket_${i}`).split(',')),
      });
    } else {
      gamerVouchers.push(convertToInt(getStorage(`ticket_${i}`).split(',')));
    }
  }

  const bankFinancialBalance = getStorage('bankFinancialBalance');
  const gamerFinancialBalance = getStorage('gamerFinancialBalance');
  const requiredStorageContent = {
    gamerName,
    gamerVoucherNumbers,
    gamerVouchers,
    gamerTicketResults,
    gamerUsedVouchers,
    bankFinancialBalance,
    gamerFinancialBalance,
  };
  return requiredStorageContent;
};

export const resetStorage = () => {
  const gamerVoucherNumbers = getStorage('gamerVoucherNumbers');
  for (let i = 1; i <= gamerVoucherNumbers; i++) {
    removeItemFromStorage(`ticket_${i}`);
    removeItemFromStorage(`result_${i}`);
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
