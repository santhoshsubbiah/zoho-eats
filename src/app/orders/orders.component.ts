import { Component, OnInit } from '@angular/core';
import { initialFoodData } from 'src/assets/data/food-data';
import { IFood } from '../food';
import { PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { dummyDataSource } from 'src/assets/data/dummy-data';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public title: string = "Orders";
  public pageSettings: PageSettingsModel;
  public orderDatasource: IFood[] = [];
  public formatOptions = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm:ss a' };
  public toolbarOptions: ToolbarItems[];
  public initialSort: Object;
  public dummyDataCollection: IFood[] = [];
  constructor() {
    this.dummyDataCollection = dummyDataSource;
    this.orderDatasource = initialFoodData.filter(item => item.quantity > 0);
    this.orderDatasource = this.orderDatasource.concat(this.dummyDataCollection);
    this.pageSettings = { pageSize: 10 };
    this.toolbarOptions = ['Search'];
    this.initialSort = {
      columns: [
        { field: 'date', direction: 'Descending' }
      ]
    };
  }

  ngOnInit(): void {

  }
  reset(): void {
    initialFoodData.map(item => item.quantity = 0);
  }

}
