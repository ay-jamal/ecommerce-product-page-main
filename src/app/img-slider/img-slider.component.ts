import { Component, OnInit, OnChanges } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
})
export class ImgSliderComponent implements OnInit {
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    setTimeout(() => {
      if (this.cartService.isClicked) {
        this.cartService.addItem({
          name: 'Fall Limited Edtion Sneakers',
          price: 125 * this.cartService.numbersOfITem,
          img: this.productThums[this.cuurentIndex],
        });
      }
    }, 1);
  }

  preview = '';

  cuurentIndex = 0;

  productArray = [
    'assets/images/image-product-1.jpg',

    'assets/images/image-product-2.jpg',

    'assets/images/image-product-3.jpg',

    'assets/images/image-product-4.jpg',
  ];

  productThums = [
    'assets/images/image-product-1-thumbnail.jpg',
    '/assets/images/image-product-2-thumbnail.jpg',
    '/assets/images/image-product-3-thumbnail.jpg',
    '/assets/images/image-product-4-thumbnail.jpg',
  ];

  display(index: number) {
    this.cuurentIndex = index;
    this.preview = this.productArray[index];
  }

  nexImg() {
    if (this.cuurentIndex < this.productArray.length) {
      this.preview = this.productArray[++this.cuurentIndex];
    }
  }
  prevImg() {
    if (this.cuurentIndex > 0) {
      this.preview = this.productArray[--this.cuurentIndex];
    }
  }
}
