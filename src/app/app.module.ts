import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StocksComponentComponent } from './stocks-component/stocks-component.component';
import { ManualComponent } from './manual-component/manual-component' ;

import { StockDirectiveDirective } from './stock-directive.directive';
import { HighlightDirective } from './highlight.directive';


import { ManualService } from './manual-service/manual.service';
import { StockService } from './stock-service/stock.service';
import { CurrencyService } from './currency.service';

import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BondsDirective } from './bonds.directive';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponentComponent,
    ManualComponent,
    StockDirectiveDirective,
    HighlightDirective,
    DashboardComponent,
    BondsDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StockService, ManualService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
