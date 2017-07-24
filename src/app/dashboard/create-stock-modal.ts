import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { StocksService } from '../stocks/stocks-service/stocks.service';

@Component({
  selector: 'create-stock-modal',
  templateUrl: './create-stock-modal.html'
})
export class CreateStockModal {
  closeResult: string;

  constructor(private modalService: NgbModal, private stocksService: StocksService) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addStock(newStockCode: string, newName: string) {
    const modalRef = this.stocksService.createStock(newName, newStockCode).subscribe();
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
