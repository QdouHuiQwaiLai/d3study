import { curry, type } from 'ramda';

export default () => {
  //  join :: String -> ([String] -> String)
  var join = curry(function(what, xs): string{
    return xs.join(what);
  })
  var j1 = join('abc')(['1', '2'])
  console.log(j1)

}