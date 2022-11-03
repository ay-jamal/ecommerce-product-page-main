import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  num = 0;
  numofAdd = 0;
  constructor(private cartServive: CartServiceService) {}

  ngOnInit(): void {}

  incNum() {
    this.num++;
  }
  decNum() {
    if (this.num != -this.num) {
      this.num--;
    }
  }

  isClecked() {
    this.cartServive.isClicked = true;
    this.cartServive.numbersOfITem = this.num;
  }
}
