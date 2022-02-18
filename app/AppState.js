import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testItem = new Item(
  {
    name: 'Milky Way',
    quantity: 10,
    price: 1.00,
    id: ''
  })

class AppState extends EventEmitter {
  /** @type {import('./Models/Item').Item[]} */
  items = [testItem]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
