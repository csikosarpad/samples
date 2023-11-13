export const formatPrice = (price) => {
  let GBP = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  });
  return GBP.format(price);
};
