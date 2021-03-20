import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, SearchService, GroupService, ToolbarService } from '@syncfusion/ej2-angular-grids';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NumericTextBoxModule,
    GridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    ToolbarService,
    SearchService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
