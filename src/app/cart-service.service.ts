import { Injectable } from '@angular/core';
import { Subject, throwIfEmpty } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  numbersOfITem = 0;
  isClicked = false;
  itemsArrya: any[] = [];
  itemNumber = 0;
  constructor() {}

  addItem(item: object) {
    this.itemsArrya.push(item);
    console.log(this.itemsArrya);
    this.isClicked = false;
  }

  deleteItem(index: number) {
    this.itemsArrya.splice(index, 1);
  }
}
