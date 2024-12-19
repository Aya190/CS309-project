import image1 from "./images/margherita_pizza.jpg";
import image2 from "./images/grilled_chicken_burger.jpg";
import image3 from "./images/seafood_platter.jpg";
import image4 from "./images/alfredo_pasta.jpg";
import image5 from "./images/beef_shawarma.jpg";
import image6 from "./images/caesar_salad.jpg";
import image7 from "./images/blueberry_cheesecake.jpg";
import image8 from "./images/mango_juice.jpg";
import image9 from "./images/steak_with_potatoes.jpg";
import image10 from "./images/chocolate_waffle.jpg";

export const items = [
  {
    id: 1,
    title: "Margherita Pizza",
    price: 120,
    description: "Traditional Italian pizza topped with mozzarella cheese, fresh tomatoes, and basil.",
    category: "Pizza",
    image: image1,
    rating: { rate: 4.8, count: 200 },
  },
  {
    id: 2,
    title: "Grilled Chicken Burger",
    price: 80,
    description: "A burger made with grilled chicken, lettuce, tomatoes, and special sauce.",
    category: "Burgers",
    image: image2,
    rating: { rate: 4.5, count: 150 },
  },
  {
    id: 3,
    title: "Seafood Platter",
    price: 200,
    description: "A mix of shrimp, calamari, and grilled fish served with rice.",
    category: "Main Dishes",
    image: image3,
    rating: { rate: 4.9, count: 180 },
  },
  {
    id: 4,
    title: "Alfredo Pasta",
    price: 90,
    description: "Penne pasta in creamy Alfredo sauce with Parmesan cheese and chicken.",
    category: "Pasta",
    image: image4,
    rating: { rate: 4.7, count: 170 },
  },
  {
    id: 5,
    title: "Beef Shawarma",
    price: 70,
    description: "Arabic beef shawarma wrap with vegetables and tahini sauce.",
    category: "Sandwiches",
    image: image5,
    rating: { rate: 4.6, count: 140 },
  },
  {
    id: 6,
    title: "Caesar Salad",
    price: 50,
    description: "Fresh salad with lettuce, Parmesan cheese, croutons, and Caesar dressing.",
    category: "Salads",
    image: image6,
    rating: { rate: 4.4, count: 120 },
  },
  {
    id: 7,
    title: "Blueberry Cheesecake",
    price: 60,
    description: "Creamy cheesecake topped with fresh blueberries and blueberry sauce.",
    category: "Desserts",
    image: image7,
    rating: { rate: 4.9, count: 110 },
  },
  {
    id: 8,
    title: "Fresh Mango Juice",
    price: 35,
    description: "Refreshing natural mango juice with no additives.",
    category: "Beverages",
    image: image8,
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 9,
    title: "Steak with Mashed Potatoes",
    price: 180,
    description: "Grilled steak served with mashed potatoes and vegetables.",
    category: "Main Dishes",
    image: image9,
    rating: { rate: 4.8, count: 190 },
  },
  {
    id: 10,
    title: "Chocolate Waffle",
    price: 70,
    description: "Warm waffle topped with chocolate sauce and bananas.",
    category: "Desserts",
    image: image10,
    rating: { rate: 4.5, count: 100 },
  },
];
