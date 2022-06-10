export const transactionArray = [
  { _id: 0, amount: -22, category: "culture", comment: "Ferrari", date: "22/06/2022", repeating: true },
  { _id: 1, amount: -4, category: "pet", comment: "Porsche", date: "07/06/2022", repeating: false },
  { _id: 2, amount: 2683, category: "salary", comment: "Lamborghini", date: "01/06/2022", repeating: true },
  { _id: 3, amount: 57, category: "shopping", comment: "Ferrari", date: "30/06/2022", repeating: true },
  { _id: 4, amount: -165, category: "travel", comment: "Bugatti", date: "10/06/2022", repeating: false },
  { _id: 5, amount: -60, category: "shopping", comment: "Mercedes", date: "10/06/2022", repeating: true },
  { _id: 6, amount: 74, category: "pet", comment: "BMW", date: "09/06/2022", repeating: true },
  { _id: 7, amount: -398, category: "travel", comment: "Ferrari", date: "06/06/2022", repeating: true },
  { _id: 8, amount: -69, category: "food", comment: "Volkswagen", date: "05/06/2022", repeating: true },
  { _id: 9, amount: -46, category: "food", comment: "BMW", date: "30/06/2022", repeating: true },
  { _id: 10, amount: 50, category: "food", comment: "Ferrari", date: "11/06/2022", repeating: true },
  { _id: 11, amount: -485, category: "bar", comment: "Bugatti", date: "28/06/2022", repeating: true },
  { _id: 12, amount: -114, category: "food", comment: "Volkswagen", date: "24/06/2022", repeating: true },
  { _id: 13, amount: -17, category: "food", comment: "Ferrari", date: "19/06/2022", repeating: true },
  { _id: 14, amount: 18, category: "travel", comment: "Audi", date: "02/06/2022", repeating: true },
  { _id: 15, amount: -169, category: "travel", comment: "Audi", date: "12/06/2022", repeating: false },
  { _id: 16, amount: -10, category: "bar", comment: "Mercedes", date: "09/06/2022", repeating: true },
  { _id: 17, amount: 26, category: "pet", comment: "Porsche", date: "26/06/2022", repeating: true },
  { _id: 18, amount: -88, category: "culture", comment: "Lamborghini", date: "29/06/2022", repeating: true },
  { _id: 19, amount: 82, category: "travel", comment: "Bugatti", date: "05/06/2022", repeating: true },
  { _id: 20, amount: 85, category: "culture", comment: "Lamborghini", date: "09/06/2022", repeating: false },
  { _id: 21, amount: 48, category: "shopping", comment: "Mercedes", date: "26/06/2022", repeating: true },
];

const getRandomCar = () => {
  const cars = ["BMW", "Mercedes", "Audi", "Volkswagen", "Ferrari", "Porsche", "Lamborghini", "Bugatti"];
  return cars[Math.floor(Math.random() * cars.length)];
};

const getRandomDateinJune2022 = () => {
  const day = Math.floor(Math.random() * 30) + 1;
  const month = Math.floor(Math.random() * 12) + 1;
  const year = Math.floor(Math.random() * 20) + 2022;
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

console.log(generateTransactions(22));
