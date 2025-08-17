export type  FoodItemType =  {
    id: string;
    restaurantId?: string; // UUID
    name: string;
    description: string;
    price: number;
    discountedPrice: number;
    isDiscounted: boolean;
    portionSize: string;
    preparationTime: number; // in minutes
    isAvailable: boolean;
    isPopular: boolean;
    isSuperSaver: boolean;
    categories: string[]; // UUIDs
    photos: string[]; // Image URLs
  }
  