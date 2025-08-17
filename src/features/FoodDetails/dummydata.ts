// Dummy Data
export const foodImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543??auto=format&fit=crop&w=400&q=80"
];

export const foodItem = {
    name: "Grilled Chicken Salad",
    description:
        "A fresh and healthy salad with grilled chicken, mixed greens, cherry tomatoes, and a light vinaigrette.",
    estimatedDelivery: "25-35 min",
};

export const nutrition = {
    calories: 550,
    portion: "350g",
    facts: [
        { label: "Carbs", value: "45g" },
        { label: "Proteins", value: "32g" },
        { label: "Fats", value: "18g" },
        { label: "Fiber", value: "8g" },
    ],
};

export const unfulfilledRequests = [
    { value: "call", index: 0, children: "Call me" },
    { value: "remove", index: 1, children: "Remove item" },
];
  

export const addOns = [
    { id: 1, name: "Garlic Bread", price: 20 },
    { id: 2, name: "Extra Cheese", price: 15 },
    { id: 3, name: "Soup of the Day", price: 30 },
];
