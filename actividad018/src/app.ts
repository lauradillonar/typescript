interface Shape {
    readonly sides: number
    area(): number
    perimeter(): number
}

function process(s: Shape){
    //do something
    console.log(`area: ${s.area()}`)
}

class Rectangle implements Shape {
    
    sides: number = 4

    constructor(readonly width: number, readonly height: number){ }
    
    area():number{
        return this.width * this.height
    }

    perimeter(): number {
        return 2 * this.width + 2 * this.height
    }
}

let r = new Rectangle(5,5)
process(r)
