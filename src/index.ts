//Basic Types
let id: number = 5
let company:string = "Abubakardev"
let isPubliched: boolean = true
let x: any = "Hello"
let age : number

age = 200

let ids: number[] = [1,2,3,4,5,6,7]

let arr: any[] = [1, true, 'Hello']


//Tuple
let person: [number, string, boolean] = [1,"Me", true]
//Tuple Array
let employee: [number, string][]

employee = [
    [1, "Abubakar"],
    [2, "Sam"],
    [3, "Ant"]
]

//Union
let pid: string | number

pid = "22"

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    "Up",
    "Down",
    "Left",
    "Right"
}

console.log(Direction2)

//Objects
type User = {
    id: number, 
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
