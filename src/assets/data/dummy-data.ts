import { IFood } from "src/app/food";

export let dummyDataSource: IFood[] = [];
let today: Date = new Date();
let availTypes: string[] = ["Breakfast", "Lunch", "Dinner"];
for (let i: number = 1000; i >= 1; i--) {
    let food: IFood = {
        name: "Food Name_" + i,
        price: Math.round(Math.random() * (400 - 100) + 1),
        type: (i % 2 === 0) ? 'Veg' : 'Non veg',
        cuisine: (i % 2 === 0) ? 'South Indian' : 'North Indian',
        availability: [availTypes[Math.round(Math.random() * (2 - 1) + 1)]],
        quantity: Math.round(Math.random() * (10 - 1) + 1),
        img: "",
        date: new Date(today.setDate(today.getDate() - 1))
    }
    dummyDataSource.push(food);
    console.log(dummyDataSource);
}