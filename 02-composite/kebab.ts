interface Component {
    operation()
    isVegetarian()
}

class Leaf implements Component {
    name: string
    isVeget: boolean

    constructor(name, isVeget) {
        this.name = name
        this.isVeget = isVeget
        console.log(`Leaf ${name} created`)
    }

    operation (){
        console.log(`operation -> ${this.name}`)
    }

    isVegetarian() {
        return this.isVegetarian
    }
}


// JS

// class Composite implements Component {
//     constructor(name) {
//         super()
//         this.name = name
//         this.children = []
//         console.log(`Composite ${name} created`)
//     }
//
//     operation() {
//         console.log('Composite Operation for: ' + this.name)
//         this.children.forEach(element => element.operation())
//     }
//
//     isVegetarian() {
//         return this.children.every(element => element.isVegetarian())
//     }
//
//     add(component) {
//         this.children.push(component)
//     }
//
// }

