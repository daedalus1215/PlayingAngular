import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock-service/stock.service';

@Component({
  selector: 'stocks-component',
  templateUrl: './stocks-component.component.html',
  styleUrls: ['./stocks-component.component.css']
})
export class StocksComponentComponent{

  title = 'Stock Component: ';
  stocks;

  constructor (stockService : StockService) {
    this.stocks = stockService.getStocks();
  }

}
