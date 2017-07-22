import { Component, OnInit } from '@angular/core';

import { StocksService } from '../stocks/stocks-service/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: string[];
  selectedStock: any;
  updateEnabled = false;

  constructor(private stocksService: StocksService) {}

  ngOnInit() {
    this.getAllStocks();
  }

  getAllStocks() {
    this.stocksService.getStocksAPI()
    .subscribe(
      data => this.stocks = data,
      error => console.log('Server Error')
    );
  }

  createStock(newStockCode: string, newName: string) {
    this.stocksService.createStock(newStockCode, newName).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  updateStock(newStockCode: string, newName: string) {
    this.stocksService.updateStock(this.selectedStock.id, newStockCode, newName).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  deleteStock(stockId: string) {
    this.stocksService.deleteStock(stockId).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  loadDetails(stock: any) {
    this.updateEnabled = true;
    this.selectedStock = stock;
  }
}
