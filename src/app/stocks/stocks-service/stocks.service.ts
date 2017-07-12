import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {
    getStocks() : string[] {
        return ['AAPL', 'MSFT', 'GOOG'];
    }

    getStockMarkets() : string[] {
        return  ['EU', 'US', 'NASDAQ', 'EURONEXT', 'HKSE'];
    }
}