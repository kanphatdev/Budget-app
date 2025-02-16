import { useState, useContext } from "react";
import ExpenseItem from "../components/ExpenseItem";
import AddExpenseForm from "./AddExpenseForm";
import { Appcontext } from "../context/Appcontext";
import { PenLine, Search } from "lucide-react";
import EditBudget from "./EditBudget"; // Import new component

const ExpenseList = () => {
  const { expenses } = useContext(Appcontext);
  const [isEditing, setIsEditing] = useState(false); // State to toggle modal
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  // Filter expenses based on search query
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto w-full h-screen flex justify-center items-center bg-base-200 p-6">
      <div className="w-full max-w-5xl bg-base-100 shadow-xl rounded-lg p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Expense List</h2>
          <div className="join gap-2">
            {/* Search Input */}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search expenses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search />
            </label>

            <AddExpenseForm />
            <button className="btn btn-success" onClick={() => setIsEditing(true)}>
              <PenLine />
              Edit Budget
            </button>
          </div>
        </div>

        {/* Expense Table */}
        <table className="table w-full">
          <thead>
            <tr className="bg-base-300">
              <th>ID</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense, index) => (
                <ExpenseItem key={index} id={expense.id} name={expense.name} cost={expense.cost} />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
                  No matching expenses found.
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="bg-base-300">
              <th>ID</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>

      {isEditing && <EditBudget closeModal={() => setIsEditing(false)} />} {/* Show modal when editing */}
    </div>
  );
};

export default ExpenseList;
