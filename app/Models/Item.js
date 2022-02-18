import { generateId } from "../Utils/generateId.js";

export class Item {
  constructor({ name, quantity, price, id }) {
    this.name = name
    this.quantity = quantity
    this.price = price
    this.id = id || generateId
  }
  FIXME
  get Template() {
    return `
    
    `
  }
}