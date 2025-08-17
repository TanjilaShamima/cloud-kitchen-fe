export const CART_ITEMS = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      title: "Margherita Pizza",
      basePrice: 1299,
      quantity: 1,
      addons: [
        { id: 1, name: "Extra Cheese", price: 15, quantity: 1 },
        { id: 2, name: "Olives", price: 10, quantity: 0 },
      ],
      instructions: "",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
      title: "Caesar Salad",
      basePrice: 85,
      quantity: 2,
      addons: [{ id: 1, name: "Grilled Chicken", price: 20, quantity: 1 }],
      instructions: "",
    },
];
  
export const SUGGESTIONS = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
      title: "Garlic Bread",
      price: 45,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      title: "Tiramisu",
      price: 50,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543??auto=format&fit=crop&w=400&q=80",
      title: "Lemonade",
      price: 30,
    },
];

export const DELIVERY_FEE = 2.5;
export const TAX_RATE = 0.08;
export const DUMMY_DISCOUNT = 3.0;


