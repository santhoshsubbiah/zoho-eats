import { IFood } from "src/app/food";
let imgUrl: string = "/assets/images/";
export let initialFoodData: IFood[] = [
    { name: "Idly", price: 10, type: "Veg", cuisine: "South Indian", availability: ["Breakfast", "Dinner"], img: imgUrl + "idly.webp", quantity: 0, date: null },
    { name: "Dosa", price: 30, type: "Veg", cuisine: "South Indian", availability: ["Breakfast", "Dinner"], img: imgUrl + "dosa.jfif", quantity: 0, date: null },
    { name: "Vada", price: 15, type: "Veg", cuisine: "South Indian", availability: ["Breakfast"], img: imgUrl + "vada.webp", quantity: 0, date: null },
    { name: "Poori", price: 60, type: "Veg", cuisine: "South Indian", availability: ["Breakfast"], img: imgUrl + "poori.webp", quantity: 0, date: null },
    { name: "Pongal", price: 40, type: "Veg", cuisine: "South Indian", availability: ["Breakfast"], img: imgUrl + "pongal.webp", quantity: 0, date: null },
    { name: "Meals", price: 100, type: "Veg", cuisine: "North Indian", availability: ["Lunch"], img: imgUrl + "meals.webp", quantity: 0, date: null },
    { name: "Chicken-Biryani", price: 150, type: "Non veg", cuisine: "South Indian", availability: ["Lunch"], img: imgUrl + "chicken-biryani.jpg", quantity: 0, date: null },
    { name: "Egg-Biryani", price: 120, type: "Non veg", cuisine: "South Indian", availability: ["Lunch"], img: imgUrl + "egg-biryani.webp", quantity: 0, date: null },
    { name: "Parotta", price: 15, type: "Non veg", cuisine: "South Indian", availability: ["Lunch", "Dinner"], img: imgUrl + "parotta.webp", quantity: 0, date: null },
    { name: "Variety-Meals", price: 100, type: "Veg", cuisine: "South Indian", availability: ["Lunch"], img: imgUrl + "variety-meals.jpg", quantity: 0, date: null },
    { name: "Pizza", price: 300, type: "Veg", cuisine: "South Indian", availability: ["Dinner"], img: imgUrl + "pizza.webp", quantity: 0, date: null },
    { name: "Burger", price: 250, type: "Veg", cuisine: "South Indian", availability: ["Dinner"], img: imgUrl + "burger.webp", quantity: 0, date: null },
    { name: "KFC", price: 350, type: "Non veg", cuisine: "South Indian", availability: ["Dinner"], img: imgUrl + "kfc.webp", quantity: 0, date: null },
    { name: "Chapathi Roll", price: 50, type: "Veg", cuisine: "South Indian", availability: ["Dinner"], img: imgUrl + "chapathi-roll.webp", quantity: 0, date: null },
    { name: "Uttapam", price: 40, type: "Veg", cuisine: "South Indian", availability: ["Dinner"], img: imgUrl + "uttapam.webp", quantity: 0, date: null },
    { name: "Birthday Cake", price: 250, type: "Veg", cuisine: "South Indian", availability: ["Any Time"], img: imgUrl + "cake.webp", quantity: 0, date: null },
    { name: "Cakes", price: 30, type: "Veg", cuisine: "South Indian", availability: ["Any Time"], img: imgUrl + "cakes.webp", quantity: 0, date: null },
    { name: "Sandwich", price: 20, type: "Veg", cuisine: "South Indian", availability: ["Any Time"], img: imgUrl + "yellow-plate.webp", quantity: 0, date: null },
    { name: "Ice Creams", price: 70, type: "Veg", cuisine: "South Indian", availability: ["Any Time"], img: imgUrl + "ice-cream.webp", quantity: 0, date: null },
    { name: "Sweets", price: 50, type: "Veg", cuisine: "South Indian", availability: ["Any Time"], img: imgUrl + "sweet.jpg", quantity: 0, date: null },
];