export const compose = (f,g) => (x) => f(g(x))


const a = (x) => x + 1
const b = (x) => x + 2

let c = 4
console.log(compose(a,b)(c))
//7