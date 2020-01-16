export default () => {
  type Compact<T> = (xs: T[]) => T[]
  type Memoize<T> = (f: Function) => (...ar: T[]) => T

  const compact: Compact<number> = xs =>  xs.filter(x => x !== null && x !== undefined)
  const memoize: Memoize<number> = f => {
    let cache: {
      [ar: string]: number
    } = {}
    return function (...ar) {
      const arg_str = JSON.stringify(ar)
      cache[arg_str] = cache[arg_str] || f.apply(f, ar)
      return cache[arg_str]
    }
  }

  const add = memoize((x: number, y: number) => {
    return x + y
  })

  console.log(add(1, 2))
}