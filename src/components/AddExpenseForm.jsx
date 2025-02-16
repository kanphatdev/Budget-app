import { useState,useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { v4 as uuidv4 } from "uuid";
const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { dispatch } = useContext(Appcontext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type:'ADD_EXPENSE',
      payload:expense
    })
  };
  return (
    <div className="flex justify-center">
      {/* Open Modal Button */}
      <button
        className="btn btn-success mb-4 capitalize"
        onClick={() => document.getElementById("expense_modal").showModal()}
      >
        Add Expense
      </button>

      {/* Modal */}
      <dialog id="expense_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl capitalize text-center mb-4">
            Add Expense
          </h3>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium capitalize mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter expense name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium capitalize mb-1">
                Cost
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="input input-bordered w-full"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button type="submit" className="btn btn-success capitalize">
                Add Expense
              </button>
              <form method="dialog">
                <button className="btn btn-outline">Cancel</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddExpenseForm;
