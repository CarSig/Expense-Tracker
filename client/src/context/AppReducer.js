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
        transactions: state.user.transactions.filter((transaction) => transaction._id !== action.payload),
      };
    case "EDIT_TRANSACTION":
      return {
        ...state,
        transactions: state.user.transactions.map((transaction) => (transaction._id === action.payload._id ? action.payload : transaction)),
      };
    case "SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    case "SET_ROUTE":
      return {
        ...state,
        route: action.payload,
      };

    case "SET_SIGNED_IN":
      return {
        ...state,
        signedIn: action.payload,
      };
    default:
      return state;
  }
};
