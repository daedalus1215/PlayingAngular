import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks-service/stocks.service';

@Component({  
  selector: 'stocks-component',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent{

  title = 'Stock Component: ';
  stocks;
  stockMarkets;
  stockMarketColors = 'blue';
  isColor = true;
  isShowingStockMarket = true;
  
  constructor (stocksService : StocksService) {
    this.stocks = stocksService.getStocks();
    this.stockMarkets = stocksService.getStockMarkets();
  }

}
