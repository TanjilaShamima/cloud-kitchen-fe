const FoodHeader: React.FC<{
  name: string;
  description: string;
  estimatedDelivery: string;
}> = ({ name, description, estimatedDelivery }) => (
  <div className="mb-6 space-y-2 space-x-2">
    <div className="flex items-center mb-1">
      <h1 className="text-2xl font-semibold text-gray-800 mr-3">{name}</h1>
      <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-0.5 rounded font-medium">
      ★ 4.5
      </span>
    </div>
    <p className="text-gray-600 mb-2">{description}</p>
    <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
      {estimatedDelivery} delivery
    </span>
    <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
      New Arrival
    </span>
    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-medium">
      30 mins to prepare
    </span>
    <span className="inline-block bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
      Popular
    </span>
  </div>
);

export default FoodHeader;
