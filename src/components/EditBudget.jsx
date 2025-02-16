import { useState, useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const EditBudget = ({ closeModal }) => {
  const { budget, dispatch } = useContext(Appcontext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleSave = () => {
    dispatch({ type: "EDIT_BUDGET", payload: newBudget });
    closeModal(); // Close modal after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-base-200 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Budget</h2>
        <input
          type="number"
          value={newBudget}
          onChange={(e) => setNewBudget(parseInt(e.target.value))}
          className="input input-bordered w-full mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={closeModal} className="btn btn-ghost">Cancel</button>
          <button onClick={handleSave} className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditBudget;
