const getRandomCar = () => {
  const cars = ["BMW", "Mercedes", "Audi", "Volkswagen", "Ferrari", "Porsche", "Lamborghini", "Bugatti"];
  return cars[Math.floor(Math.random() * cars.length)];
};

const getRandomDateinJune2022 = () => {
  const day = Math.floor(Math.random() * 30) + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  const year = 2022;
  return `${day}/${month}/${year}`;
};

const generateTransactions = (count) => {
  const transactions = [];
  for (let i = 0; i < count; i++) {
    transactions.push({
      _id: i,
      amount: Math.floor(Math.random() * 200) - 100,
      category: ["shopping", "food", "pet", "travel", "bar", "culture"][Math.floor(Math.random() * 6)],
      comment: getRandomCar(),
      date: getRandomDateinJune2022(),
      repeating: Math.random() > 0.1,
    });
  }
  return transactions;
};

const transactions = generateTransactions(100);

export const transactionArray = transactions;
