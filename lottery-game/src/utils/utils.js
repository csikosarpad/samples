export const getStorage = (prop) => {
  return localStorage.getItem(prop) ?? null;
};
export const setStorage = ({ key, value }) => {
  localStorage.setItem(key, value);
};

export const getLottoLottery = () => {
  const lottoSet = new Set();
  while (lottoSet.size < 5) {
    lottoSet.add(Math.round(Math.random() * 38) + 1);
  }
  return Array.from(lottoSet);
};

const summarize = ({ lotteryNumbers, voucher }) => {
  return lotteryNumbers.filter((item) => voucher.find((elem) => elem === item));
};

export const getResultsTickets = ({ lotteryNumbers, vouchers }) => {
  let ticketResults = [];
  const nums = vouchers.length;
  ticketResults = Array.from(Array(nums), () => []);
  vouchers.map(
    (item, index) =>
      (ticketResults[index] = [
        ...summarize({ lotteryNumbers: lotteryNumbers, voucher: item }),
      ])
  );
  return ticketResults;
};

export const result = ({ lotteryNumbers, voucher }) => {
  const temp = summarize({ lotteryNumbers, voucher });
  let message = temp.length > 1 ? 'Ön nyert!' : 'Nem nyert!';
  return {
    szamok: temp,
    talalat: temp.length,
    message: message,
  };
};

export const emberi = ({ lotteryNumbers, voucher }) => {
  const vegeredmeny = result({ lotteryNumbers, voucher });
  console.log(
    `A sorsolás eredménye: ${vegeredmeny.message}, mivel összesen ${vegeredmeny.talalat} számot talált el, melyek: ${vegeredmeny.szamok}`
  );
};

export const resetClass = () => {
  document
    .querySelectorAll('.ticket')
    .forEach((item) => item.classList.remove('selected'));
};

export const formatPrice = (price) => {
  let GBP = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  });
  return GBP.format(price);
};
