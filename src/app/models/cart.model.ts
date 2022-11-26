import {CartProductModel} from "./cart-product.model";

export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: CartProductModel[];
}
