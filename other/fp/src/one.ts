export default () => {
  type Add<T> = (x:T, y:T) => T
  type Multiply<T> = (x:T, y:T) => T  

  const add: Add<number> = (x, y) => x + y
  const multiply: Multiply<number> = (x, y) => x * y

  const f_a = 4
  const f_b = 2

  const s = multiply(f_b, add(f_a, f_a))
  
  console.log(s)
}

