export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction._id !== action.payload),
      };
    case "EDIT_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((transaction) => (transaction._id === action.payload._id ? action.payload : transaction)),
      };

    default:
      return state;
  }
};
