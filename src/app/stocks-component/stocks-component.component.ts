import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-stocks-component',
  templateUrl: './stocks-component.component.html',
  styleUrls: ['./stocks-component.component.css']
})
export class StocksComponentComponent{

  title = 'List of Stocks: ';
  stocks;

  constructor (stockService : StockService) {
    this.stocks = stockService.getStocks();
  }

}
