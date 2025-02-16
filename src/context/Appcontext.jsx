import { createContext, useReducer } from "react";
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    case "EDIT_BUDGET": // New case
      return {
        ...state,
        budget: action.payload, // Update budget with new value
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "Rent", cost: 40 },
    { id: 2, name: "Groceries", cost: 400 },
    { id: 3, name: "Utilities", cost: 50 },

  ],
};
export const Appcontext = createContext();
export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <>
    <Appcontext.Provider value={{
      budget:state.budget,
      expenses:state.expenses,
      dispatch,
    }}>
{children}

    </Appcontext.Provider>
    
    
    
    </>
  )
};
