type NS = string | number

// function that returns a tuple
function getTuple(a: NS, b: NS): [NS, NS] {
    return [a, b]
}

const stringArray = getTuple('hello', 'world')

const numberArray = getTuple(1.25, 2.56)

//case error
const mixedArray = getTuple(1.25, 'world')

// Property 'toUpperCase' does not exist on type 'NS'.
console.log(stringArray.map((s) => s.toUpperCase()))

// Error: Property 'toFixed' does not exist on type 'NS'.
console.log(numberArray.map((n) => n.toFixed()))

function Tuple<T>(a: T, b: T): [T, T] {
    return [a, b]
}
const stringArr = Tuple('hello', 'hi') //function Tuple<string>(a: string, b: string): [string, string]

function Tuple2<any>(a: any, b: any): [any, any] {
    return [a, b]
}

const stringArr2 = Tuple2('hello', 'hi') //function Tuple2<unknown>(a: any, b: any): [any, any]
