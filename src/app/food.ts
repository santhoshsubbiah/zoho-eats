export interface IFood {
    name: string,
    price: number,
    type: string,
    cuisine: string,
    availability: string[],
    img: string,
    quantity: number,
    date?: Date
}