class Component {
  constructor() {}
  operation() {}
  isVegetarian() {}
  add(component) {}
}

class Leaf extends Component {
  constructor(name, isVeget) {
    super()
    this.name = name
    this.isVeget = isVeget
    console.log(`Leaf ${name} created`)
  }

  operation() {
    console.log(`operation -> ${this.name}`)
  }

  isVegetarian() {
    return this.isVeget
  }
}

class Composite extends Component {
  constructor(name) {
    super()
    this.name = name
    this.children = []
    console.log(`Composite ${name} created`)
  }

  operation() {
    console.log('Composite Operation for: ' + this.name)
    this.children.forEach(element => element.operation())
  }

  isVegetarian() {
    return this.children.every(element => element.isVegetarian())
  }

  add(component) {
    this.children.push(component)
  }

}

let sandwich = new Composite('pain')

let garniture = new Composite('garniture')

garniture.add(new Leaf('salade', true))
garniture.add(new Leaf('tomate', true))
garniture.add(new Leaf('oignons', true))
//garniture.add(new Leaf('veau', false))
garniture.add(new Leaf('steak soja', true))

sandwich.add(garniture)
sandwich.operation()

if(sandwich.isVegetarian()) {
  console.log("Le sandwich est végétarien")
}
else {
  console.log("Le sandwich n'est pas végétarien")
}
