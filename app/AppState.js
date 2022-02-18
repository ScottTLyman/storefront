import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testItem = new Item(
  {
    name: 'Milky Way',
    quantity: 10,
    price: 1.00,
    id: '',
    imgUrl: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZW5N2LRSQ4I6ZABWPWZFLP7ROY.jpg'
  })
const testItem2 = new Item(
  {
    name: 'Butterfinger KING SIZE',
    quantity: 10,
    price: 2.00,
    id: '',
    imgUrl: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZW5N2LRSQ4I6ZABWPWZFLP7ROY.jpg'
  })
const testItem3 = new Item(
  {
    name: "Giant Hershey's",
    quantity: 15,
    price: 2.50,
    id: '',
    imgUrl: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZW5N2LRSQ4I6ZABWPWZFLP7ROY.jpg'
  })

class AppState extends EventEmitter {
  /** @type {import('./Models/Item').Item[]} */
  items = [testItem, , testItem2, testItem3]
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
