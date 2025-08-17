import { nutrition } from "./dummydata";

const NutritionPanel: React.FC<typeof nutrition> = ({
  calories,
  portion,
  facts,
}) => (
  <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row gap-4 border">
    <div className="flex-1">
      <div className="text-gray-800 font-medium text-lg mb-1">
        {calories} kcal
      </div>
      <div className="text-gray-500 text-sm mb-2">Estimated Calories</div>
      <div className="text-gray-800 font-medium">{portion}</div>
      <div className="text-gray-500 text-sm">Portion Size</div>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-2">
      {facts.map((fact) => (
        <div key={fact.label} className="bg-gray-50 rounded-lg p-2 text-center">
          <div className="text-gray-800 font-semibold">{fact.value}</div>
          <div className="text-gray-500 text-xs">{fact.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default NutritionPanel;
