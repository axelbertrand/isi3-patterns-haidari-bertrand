//👋 Visitor Pattern

/******************************************************************************************/
/* https://www.codingame.com/playgrounds/8339/design-pattern-visitor/exemple-dutilisation */
/******************************************************************************************/

interface Visitor {
  visit(item: Visitable);
}

interface Visitable {
  accept(visitor: Visitor);
}

class KebabComponent implements Visitable {
  name: string
  isVeget: boolean

  constructor(name: string, isVeget: boolean = false) {
      this.name = name
      this.isVeget = isVeget
  }

  accept(visitor: Visitor) {
    visitor.visit(this)
  }

  operation() {
      console.log(`operation -> ${this.name}`)
  }
}

class VegetKebabVisitor implements Visitor {
  visit(item: KebabComponent) {
    switch(item.name) { 
      case "pain":
      case "garniture":
      case "salade":
      case "tomate":
      case "oignon":
      case "steak soja": { 
        item.isVeget = true
        break; 
      } 
      default: { 
        item.isVeget = false
        break; 
      } 
    } 
  }
}

class Kebab implements Visitable {
  components: KebabComponent[] = []

  constructor(components: KebabComponent[]) {
      this.components = components
  }

  accept(visitor: Visitor) {
    this.components.forEach(element => element.accept(visitor))
  }

  isVegetarian() {
    return this.components.every(component => component.isVeget)
  }
}


const kebab = new Kebab([
  new KebabComponent("salade"), 
  new KebabComponent("tomate"), 
  new KebabComponent("oignon"),
  // new KebabComponent("veau")
])

kebab.accept(new VegetKebabVisitor())

console.log(kebab)

if(kebab.isVegetarian()) {
  console.log("Le kebab est végétarien")
}
else {
  console.log("Le kebab n'est pas végétarien")
}