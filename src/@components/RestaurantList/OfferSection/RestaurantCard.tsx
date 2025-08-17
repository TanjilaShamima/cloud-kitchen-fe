// components/RestaurantCard.tsx

import { FoodBusinessType } from "@/@types/restaurant";
import {
  Clock,
  PercentCircle,
  Star,
  MapPin,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  restaurant: FoodBusinessType;
  className?: string;
}

export default function RestaurantCard({ restaurant, className }: Props) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/cooks/${restaurant.id}`);
  };

  return (
    <div onClick={handleClick} className={`flex-shrink-0 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer ${className}`}>
      <div className="relative">
        <img
          src={restaurant.profileImage}
          alt={restaurant.businessName}
          className="w-full h-40 object-cover rounded-t-xl"
        />
        <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
          Tk. {restaurant.deliveryFee} off
        </span>
        <span className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <PercentCircle className="w-4 h-4 text-pink-600" />
        </span>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-sm line-clamp-1">
            {restaurant.businessName} – {restaurant?.location?.area}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500 text-xs">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {restaurant.averageRating.toFixed(1)}
            </span>
            <span className="text-gray-500 text-xs">({restaurant.totalReviews}+)</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-1">
          {restaurant.specialities.join(", ")}
        </p>

        <div className="flex items-center text-xs text-gray-600 gap-2">
          <Clock className="w-4 h-4" />
          <span>
            {restaurant?.schedules?.[0]?.startTime || "N/A"} – {restaurant?.schedules?.[0]?.endTime || "N/A"}
          </span>
        </div>

        <div className="flex items-center text-xs text-gray-600 gap-2 mt-1">
          <PercentCircle className="w-4 h-4" />
          <span>Tk {restaurant?.deliveryFee}</span>
        </div>
      </div>
    </div>
  );
}
