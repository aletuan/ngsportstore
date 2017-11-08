import { Component } from "@angular/core";
import { Cart } from "../model/card.model";

@Component({
  selector: "cart-summry",
  moduleId: module.id,
  templateUrl: "cartSummary.component.html"
})

export class CartSummaryComponent {
  constructor(public cart: Cart){};
}
