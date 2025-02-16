import { PiggyBank } from "lucide-react";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const Remaining = () => {
  const { budget, expenses } = useContext(Appcontext);
  
  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
const alertType = totalExpenses > budget ? "text-error":"text-success"
  return (
    <div className="stat ">
      <div className="stat-figure text-secondary">
        <PiggyBank size={36} />
      </div>
      <div className="stat-title">Remaining</div>
      <div className={`stat-value ${alertType}`}>
        {budget - totalExpenses}
      </div>
    </div>
  );
};

export default Remaining;
