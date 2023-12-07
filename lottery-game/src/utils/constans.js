export const STORAGE_VARIABLES = {
  GAMER_VOUCHER_NUMBERS: 'gamerVoucherNumbers',
  GAMER_TOTAL_PRICE: 'gamerTotalPrice',
  TICKET: 'ticket_',
};

export const GAMER = {
  NAME: 'lotteryGamer',
  MONEY: 'lotteryGamerMoney',
  INITMONEY: 10000,
  FINANCIAL_BALANCE: 10000,
  VOUCHERS: [],
};

export const BANK = {
  NAME: 'lotteryBank',
  MONEY: 'lotteryBankMoney',
  INITMONEY: 0,
  FINANCIAL_BALANCE: 0,
};

export const GAMERULES = {
  CURRENCY: 'akcse',
  PRICE_OF_TICKET: 500,
  MAXNUM: 39,
  WINS: [
    { hit: 2, prize: 2 },
    { hit: 3, prize: 4 },
    { hit: 4, prize: 8 },
    { hit: 5, prize: 16 },
  ],
};
