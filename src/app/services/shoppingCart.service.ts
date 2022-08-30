import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {Subject} from "rxjs";


@Injectable()
export class ShoppingCartService {
  // Local variable which stores
  public cartItems = [];
  public products = new Subject();


  getProducts(): Observable<any> {
    console.log(this.cartItems)
    return this.products.asObservable();

  }

  setProducts(products: any) {
    // @ts-ignore
    this.cartItems.push(...products);
    this.products.next(products);
  }

  // Add single product to the cart
  addProductToCart(product: any) {
    // @ts-ignore
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  removeProductFromCart(productId: any) {
    this.cartItems.map((item, index) => {
      // @ts-ignore
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    this.products.next(this.cartItems);
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map((item: any) => {
      total += item.price;
    });

    return total
  }

  getProductsLength() {
    return this.cartItems.length;
  }
}
