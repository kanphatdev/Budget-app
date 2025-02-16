import { Landmark } from "lucide-react";
import { Appcontext } from "../context/Appcontext";
import { useContext } from "react";

const Budget = () => {
  const { budget } = useContext(Appcontext);

  return (
    <div className="stat">
      <div className="stat-figure text-secondary">
        <Landmark size={36} />
      </div>
      <div className="stat-title text-center">Budget</div>
      <div className="stat-value text-center">{budget}</div> {/* Display updated budget */}
    </div>
  );
};

export default Budget;
