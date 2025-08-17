// types/FoodBusiness.ts
export type Schedule = {
    startTime: string;
    endTime: string;
    status: "available" | "unavailable";
};

export type Coordinates = {
    lat: number;
    lng: number;
};

export type Location = {
    address: string;
    city: string;
    area: string;
    coordinates: Coordinates;
};

export type FoodBusinessType = {
    id: string;
    businessName: string;
    profileImage: string;
    bio: string;
    specialities: string[];
    averageRating: number;
    totalReviews: number;
    minimumOrder: number;
    deliveryFee: number;
    availabilityStatus: "available" | "unavailable";
    schedules?: Schedule[];
    location?: Location;
    tags?: string[];
    deliveryInfo?: string;
    menu?: MenuItem[];
    cuisine?: string;
    deals?: Deal[];
    categories?: CookFoodsCategoryType[];
};

export type CookFoodsCategoryType = {
    id?: string;
    name: string;
    count: number;
    image?: string;
}

export interface Deal {
    id: string;
    title: string;
    description: string;
}

export interface MenuItem {
    name: string;
    price: string;
}
