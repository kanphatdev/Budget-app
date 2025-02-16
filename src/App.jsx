import { HandCoins } from "lucide-react";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import ExpenseList from "./components/ExpenseList";
import { AppProvider } from "./context/Appcontext";

const App = () => {
  return (
    <AppProvider>


        <div className=" flex flex-col items-center justify-center bg-base-200 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center capitalize mb-6">
        <HandCoins className="inline-block w-8 h-8 mr-2 text-primary" />
        My Budget Planner
      </h1>

      {/* Budget Stats Section */}
      <div className="w-full max-w-4xl flex items-center justify-center">
        <div className="stats shadow-lg bg-base-100 rounded-lg p-4 ">
          <Budget />
          <Remaining />
          <ExpenseTotal />
        </div>
      </div>

      {/* Expense List Section */}
      <div className="w-full max-w-4xl mt-6">
        <ExpenseList />
      </div>
    </div>
    </AppProvider>
  
  );
};

export default App;
