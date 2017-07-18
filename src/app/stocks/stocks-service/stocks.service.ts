import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StocksService {

    constructor (private http: Http) {

    }

    getStocksAPI(): Observable<any> {
        return this.http.get('http://localhost:3000/stocks')
                    .map( (res: Response) => res.json() )
                    .catch((error: any) => Observable.throw(error.json().error || ' Server Error'));
    }

    createStock(newStockCode: string, newName: string): Observable<any> {
        return this.http.post('http://localhost:3000/stocks', {name: newName, stockCode: newStockCode});
    }

    getStocks(): string[] {
        return ['AAPL', 'MSFT', 'GOOG'];
    }

    getStockMarkets(): string[] {
        return  ['EU', 'US', 'NASDAQ', 'EURONEXT', 'HKSE'];
    }
}
