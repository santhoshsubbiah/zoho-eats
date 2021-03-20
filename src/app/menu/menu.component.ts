import { Component, OnInit } from '@angular/core';
import { IFood } from '../food';
import { initialFoodData } from "../../assets/data/food-data";
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public title: string = "Menu";

  public foods: IFood[] = [];
 
  public count: number = 0;
  constructor() {
    this.foods = initialFoodData;
  }

  handleInputChange(index: number, event: ChangeEventArgs): void {
    initialFoodData[index].quantity = event.value;
    initialFoodData[index].date = new Date();
  }

  ngOnInit(): void {
  }

}
