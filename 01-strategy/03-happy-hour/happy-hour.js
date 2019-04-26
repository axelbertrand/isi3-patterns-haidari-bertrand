
class Beer {
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
}

// no interface with JavaScript
class HappyHourStrategy {
  constructor() {
    this.discount = 0
  }
  calculateNewPrice(beer) {
    return beer.price * this.discount
  }
}

class TenPercent extends HappyHourStrategy {
  constructor() {
    super();
    this.discount = 0.9
  }
}

class TwentyFivePercent extends HappyHourStrategy {
  constructor() {
    super();
    this.discount = 0.75
  }
}

class NoDiscount extends HappyHourStrategy {
  constructor() {
    super();
    this.discount = 1
  }
}

class PubWaiter {
  constructor(name) {
    this.name = name
    return this
  }

  useStrategy(strategy) {
    this.strategy = strategy
    return this
  }

  calculatePrice(beer) {
    return this.strategy.calculateNewPrice(beer)
  }
}

/* initialize strategy */
let noDiscount = new NoDiscount()
let tenPercent = new TenPercent()
let twentyFivePercent = new TwentyFivePercent()

/* initialize Beers */
let chouffe = new Beer("Chouffe", 3.0)
let paleAle = new Beer("Pale Ale", 4.0)
let ipa = new Beer("IPA", 5.0)

/* waiter */
let bob = new PubWaiter("Bob")

/* orders */
let paleAlePrice = bob.useStrategy(noDiscount).calculatePrice(paleAle)
let chouffePrice = bob.useStrategy(tenPercent).calculatePrice(chouffe)
let ipaPrice = bob.useStrategy(twentyFivePercent).calculatePrice(ipa)

if (paleAlePrice==4.0) { console.log("paleAlePrice ok") } else { console.log("paleAlePrice ko") }
if (chouffePrice==2.7) { console.log("chouffePrice ok") } else { console.log("chouffePrice ko") }
if (ipaPrice==3.75) { console.log("ipaPrice ok") } else { console.log("ipaPrice ko") }

