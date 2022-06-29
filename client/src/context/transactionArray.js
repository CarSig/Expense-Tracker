const getRandomCity = () => {
  const cities = ["Berlin", "Paris", "London", "New York", "Rome", "Madrid", "Stockholm", "Oslo"];
  return cities[Math.floor(Math.random() * cities.length)];
};

const getRandomDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  return date;
};


const categoryArray = ["bar", "restaurant", "cafe", "other", "food", "pet", "travel", "shopping"]


const generateTransactions = (count) => {
  const transactions = [];
  for (let i = 0; i < count; i++) {
    transactions.push({
      _id: i,
      amount: Math.floor(Math.random() * 200) - 100,

      category: categoryArray[Math.floor(Math.random() * categoryArray.length)],
      comment: getRandomCity(),
      date: getRandomDate(),
      repeating: Math.random() > 0.1,
      user: Math.random() < 0.5 ? "62ac22d414c706292634478f" : "62acb0de35351da0da04a0cc",
    });
  }
  return transactions;
};

const transactions = generateTransactions(100);




export const transactionArray = transactions;
