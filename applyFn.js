// const teacher = {
//     firstName: "Minh",
//     lastName: "Thu",
// }

// function greet(greeting, message) {
//     console.log(`${greeting} ${this.firstName} ${this.lastName}. ${message}`)
// }
// greet.apply(teacher, ['em chào cô', 'cô dạy môn gì thế ạ'])

// greet.call(teacher, 'em chào cô', 'cô dạy môn gì thế ạ')

//mượn hàm (function borrowing)
const teacher = {
    firstname: "Minh",
    lastName: "Thu",
    isOnline: false,
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstname} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOnline = false
        console.log(`${this.firstname} ${this.lastName} is Offline`)
    }
}
const me = {
    firstname: "sanh",
    lastName: "vo",
    isOnline: false,
}
teacher.goOnline.apply(me) //mượn hàm (function borrowing)

function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Parrot() {
    Animal.call(this, ...arguments)
    this.speak = function () {
        console.log('nhà có khách')
    }
}
const conVet = new Parrot('Vet', 55)
console.log(conVet)

/**
 * fn.bind()
 * fn.call()
 * fn.apply()
 * là các method thừa kế từ Function.prototype
 */

/**
 * fn.bind()
 * trả ra hàm mới với this tham chiếu tới thisArguments
 * không thực hiện gọi hàm
 * nếu được bind kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn
 * const newFn = fn.bind(this.Arg, arg1, arg2, ...)
 * newFn(arg1, arg2)
 */

/**
 * fn.call()
 * thực hiện bind `this` với `this.Arg` và thực hiện gọi hàm
 * nhận các đối số cho hàm gốc từ `arg1, arg2, ...`
 * fn.call(this.Arg, arg1, arg2, ...)
 */

/**
 * fn.apply()
 * thực hiện bind `this` với `this.Arg` và thực hiện gọi hàm
 * nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`
 * fn.apply(this.Arg, [arg1, arg2, ...])
 */