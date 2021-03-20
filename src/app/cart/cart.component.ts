import { Component, OnInit } from '@angular/core';
import { initialFoodData } from 'src/assets/data/food-data';
import { IFood } from '../food';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public title: string = "Cart";
  public selectedFoodData: IFood[] = [];
  public totalAmount: number = 0;
  constructor() {
    this.selectedFoodData = initialFoodData.filter(item => item.quantity > 0);
    this.selectedFoodData.map(item => {
      this.totalAmount += (item.quantity * item.price);
    });
  }
  handleInputChange(name: string, price: number, event: ChangeEventArgs): void {
    let currentCount: number = 0;
    initialFoodData.map(item => {
      if (item.name === name) {
        currentCount = item.quantity;
        item.quantity = event.value;
      }
    })
    this.selectedFoodData.map(item => {
      if (item.name === name) {
        item.quantity = event.value;
      }
    })
    this.totalAmount -= (currentCount * price);
    this.totalAmount += (event.value * price);
  }
  removeFromCart(index: number, name: string): void {
    this.selectedFoodData.splice(index, 1);
    initialFoodData.map(item => {
      if (item.name === name) {
        item.quantity = 0;
      }
    });
    this.totalAmount = 0;
    this.selectedFoodData.map(item => {
      this.totalAmount += (item.quantity * item.price);
    });
  }
  orderButtonClick(): void {
    this.selectedFoodData = [];
  }
  ngOnInit(): void {
  }

}
