const teacher = {
    firtName: "Minh",
    lastName: "Thu",
}
const me = {
    firtName: "sanh",
    lastName: "vo",
    showFullName() {
        console.log(`${this.firtName}  ${this.lastName}`)
    }
}
me.showFullName.call(teacher) //được gọi là mượn hàm (function borrowing)

function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
}

// const conGa = new Chicken('Sanh', 55, 2)
// console.log(conGa)

function logger() {
    Array.prototype.forEach.call(arguments, item => {
        console.log(item)
    })
}
logger(1, 2, 3, 4)


