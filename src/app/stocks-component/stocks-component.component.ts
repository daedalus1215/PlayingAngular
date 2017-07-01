import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { ManualService } from '../manual-service/manual.service';

@Component({
  selector: 'app-stocks-component',
  templateUrl: './stocks-component.component.html',
  styleUrls: ['./stocks-component.component.css']
})
export class StocksComponentComponent{

  title = 'List of Stocks: ';
  stocks;
  manuals;

  constructor (stockService : StockService, manualService : ManualService) {
    this.stocks = stockService.getStocks();
    this.manuals = manualService.getManuals();
  }

}
