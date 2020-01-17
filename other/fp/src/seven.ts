export default () => {
  var Container:any = function(x:any) {
    this.__value = x;
  }
  
  Container.of = function(x:any) { return new Container(x); };
}