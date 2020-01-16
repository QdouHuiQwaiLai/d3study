import { curry } from 'lodash'
import _, { split, map, filter, match, reduce, } from 'ramda'

const Test: any = () => {
  const words = split('')
  const sentences = map(words)
  // const filterQs = filter(match())
  var _keepHighest = (x:any, y:any) => x >= y ? x : y
  const max = reduce(_keepHighest, -Infinity)
  var slice = _.curry((start, end, xs:string) => xs.slice(start, end))
  var task = slice(0)
}

export default () => {
  const match = curry((what: RegExp | string, str: string) => str.match(what))
  const replace = curry((what: RegExp | string, replacement: string, str: string) =>  str.replace(what, replacement))
  const filter = curry((f: any, ary: string[]) => ary.filter(f))
  const map = curry((f: any, ary: string[]) => ary.map(f))

  const hasSpaces = match(/\s+/g)
  const findSpaces = filter(hasSpaces);
  console.log(findSpaces(["tori_spelling", "tori amos"]))  // ["tori amos"]
}

