const getRandomCar = () => {
  const cars = ["BMW", "Mercedes", "Audi", "Volkswagen", "Ferrari", "Porsche", "Lamborghini", "Bugatti"];
  return cars[Math.floor(Math.random() * cars.length)];
};

const getRandomDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  return date;
};




const generateTransactions = (count) => {
  const transactions = [];
  for (let i = 0; i < count; i++) {
    transactions.push({
      _id: i,
      amount: Math.floor(Math.random() * 200) - 100,
      category: ["shopping", "food", "pet", "travel", "bar", "culture"][Math.floor(Math.random() * 6)],
      comment: getRandomCar(),
      date: getRandomDate(),
      repeating: Math.random() > 0.1,
      user: Math.random() < 0.5 ? "62ac22d414c706292634478f" : "62acb0de35351da0da04a0cc",
    });
  }
  return transactions;
};

const transactions = generateTransactions(100);
console.log(generateTransactions(10));



export const transactionArray = transactions;
