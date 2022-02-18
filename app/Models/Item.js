import { generateId } from "../Utils/generateId.js";

export class Item {
  constructor({ name, quantity, price, id, imgUrl }) {
    this.name = name
    this.quantity = quantity
    this.price = price
    this.id = id || generateId
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4 p-2">
      <div class="bg-secondary shadow rounded d-flex flex-column p-2">
        <img
          src="${this.imgUrl}"
          alt="item image" class="img-fluid rounded-top">
        <div class="p-2">
          <p>Item: ${this.name}</p>
          <p>Quantity: ${this.quantity}</p>
          <p>Price $${this.price.toFixed(2)}</p>
        </div>
        <button class="btn btn-outline-success">Add to Cart</button>
      </div>
    </div>
    `
  }
}