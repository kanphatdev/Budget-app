import { HandCoins } from "lucide-react";
import { Appcontext } from "../context/Appcontext";
import { useContext } from "react";

const ExpenseTotal = () => {
  const { expenses } = useContext(Appcontext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="stat">
      <div className="stat-figure text-secondary">
        <HandCoins size={36} />
      </div>
      <div className="stat-title">spent so far.</div>
      <div className="stat-value">{totalExpenses}</div>
    </div>
  );
};
export default ExpenseTotal;
