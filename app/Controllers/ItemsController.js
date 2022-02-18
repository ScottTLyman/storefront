import { ProxyState } from "../AppState.js"
import { itemsService } from "../Services/ItemsService.js"

function _drawItems() {
  let template = ''
  ProxyState.items.forEach(i => template += i.Template)
  document.getElementById('itemsToSell').innerHTML = template
}

export class ItemsController {
  constructor() {
    _drawItems()

  }
  addToCart() {
    itemsService.addToCart()
  }

}