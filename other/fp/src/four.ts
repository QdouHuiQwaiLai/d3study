import { compose, reduce, curry, toLower, join, split, replace, map, prop, last, add } from 'ramda';

const Text: any = () => {
  const isLastInStock = compose(prop('in_stock'), last)
  var _average = function(xs:any) { return reduce(add, 0, xs) / xs.length} // <- 无须改动

  var averageDollarValue = function(cars:any) {
    var dollar_values = map(function(c) { return c.dollar_value; }, cars)
    return _average(dollar_values)
  }
}

export default () => {
  const toUpperCase = (x: string) =>  x.toUpperCase()
  const exclaim = (x: string) => `${x}!`
  const shout = compose(exclaim, toUpperCase)

  console.log(shout("send in the clowns"))
  const head = (x: string[]) => x[0]
  const reverse = reduce((acc: string[], x: string) => [x].concat(acc), [])
  const last = compose(head, reverse)
  console.log(last(['jumpkick', 'roundhouse', 'uppercut']))

  console.log(compose(toUpperCase, compose(head, reverse))(['jumpkick', 'roundhouse', 'uppercut']))
  console.log(compose(compose(toUpperCase, head), reverse)(['jumpkick', 'roundhouse', 'uppercut']))

  // debug
  var trace = curry(function(tag, x){
    console.log(tag, x)
    return x
  })


  var dasherize = compose(join('-'), map(toLower), trace("after split"), split(' '), replace(/\s{2,}/ig, ' '));
  dasherize('The world is a vampire')

  const id = (x:any) => x
}