import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  number: any = 0;
  open = false;
  array: any;
  constructor(public cartServive: CartServiceService) {}

  ngOnInit(): void {
    this.array = this.cartServive.itemsArrya;

    console.log(this.array);
  }

  toggle() {
    this.open = !this.open;
    console.log(this.array);
  }

  deleteItem(index: number, event: Event) {
    this.cartServive.deleteItem(index);
    event.stopPropagation();
  }
}
