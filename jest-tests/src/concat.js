const concat = (arr1, arr2) => {
  arr2.forEach((item) => arr1.push(item));
  return arr1;
};

export default concat;
