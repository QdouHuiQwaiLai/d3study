// let a: number = 10

// any,
// unkonwn any对应的安全类型， 当unkonwn被实例化调用的时候回报错
// let b: unknown
// try {
//   b()
// } catch (error) {
//   console.log(error)
// }

// nevwe
// const error = (message: any):never => {
//   throw new Error(message)
// }
// const emparr: never[] = []  //  永远为空的数组

// object
// let o: object = {
//   'a': 1111,
//   'b': '222'
// }

// tuple
// let x: [string, number]
// x = ['1', 1]  // 赋值 的个数， 类型， 顺序 都必须严格一样


// enum
// {0: "up", 10: "down", 11: "left", 12: "right", 
// up: 0, down: 10, left: 11, right: 12}
// enum D1 {
//   up, // 0
//   down = 10, // D1[10] = 'down' 反向映射
//   left, //11
//   right
}
// const enum 不会保存结构
// const enum D2 { Up='Up', Left='left', No=0}

// // interface
// interface User {
//   name: string
//   age?: number
//   readonly isMale: boolean
//   say: (word: string) => string
//   phone: {
//     qq: string
//     sina?: string
//   }
  // [propName: string]: any // 索引签名 这样就可以任意熟悉
}

// function
// 重载

// 泛型 generic
// const returnItem:
//   <T, U>(a:T, b:Array<U>) => [T, number] = (a, b) => [a, b.length]

// 类型断言和类型守卫
// as , | , &

// 类型兼容性
// let x = (a: number) => 0
// let y = (b: number, s: string) => 0
// y = x // OK
// x = y // Error 不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”。

// 高级类型之交叉类型、联合类型、类型别名
/*
function mixin<T, U>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }
  return result;
}
*/
/*
function formatCommandline(command: string[] | string) {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }
}
*/

// type s1 = string

// 可辨识联合类型
// type Direc = 'N' | 'E' | 'S' | 'W'  // 字符串类型模拟枚举
// interface Info {
//   username: string
// }
// type UserAction = | {
//   id: number
//   action: 'delete'
//   info: Info
// } |
// {
//   action: 'create'
//   info: Info
// }
// const aa1: UserAction = {'action': 'create', 'info': {'username': '1'}}
// function aa2 (aa1: UserAction): void {
//   if (aa1.action === 'delete') {
//     console.log(aa1.id)
//   }
// }

// Object.defineProperty

// 装饰器
// tsconfig.json 打开实验性特性
// "experimentalDecorators": true
// 类装饰器
// function addAge(constructor: Function) {
//   constructor.prototype.age = 18;
// }
// @addAge
// class Person{
//   age: number;
// }
// console.log(new Person().age); // 18
// 声明装饰器修饰方法/属性
// target : 类的原型方法
// propertyKey：方法的名字。
// descriptor：成员属性描述。
// function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   console.log('aaaaaaaaaaaa')
//    console.log(target);
//    console.log("prop " + propertyKey);
//    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
//    descriptor.writable = false;
// };

// class Person{
//   name: string;
//   constructor() {
//     this.name = 'xiaomuzhu';
//   }

//   @method
//   say(){
//     return 'instance method';
//   }

//   @method
//   static run(){
//     return 'static method';
//   }
// }

// const xmz = new Person();

// // 修改实例方法say
// // xmz.say = function() {
// //   return 'edit'
// // }

// // 打印结果,检查是否成功修改实例方法
// console.log(xmz.say());


// 参数装饰器
// target 参数所在对象的原型
// propertyKey： 参数的名字
// index 参数在数组的位置
// function logParam(target: Object, propertyKey: string, index: number) {
//   console.log(target, propertyKey, index);
// }

// 装饰器工厂
// @logClass
// class Person { 
//   @logProperty
//   public name: string;
//   constructor(name : string) { 
//     this.name = name;
//   }
//   @logMethod
//   public greet(@logParameter message : string) : string { 
//     return `${this.name} say: ${message}`;
//   }
// }
// // 打印构造函数
// function logClass(target: typeof Person) {
//     console.log(target)
// }
// // 打印属性名
// function logProperty(target: any, propertyKey: string) {
//     console.log(propertyKey);   
// }
// // 打印方法名
// function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(propertyKey);   
// }
// // 打印参数位置
// function logParameter(target: Object, propertyKey: string, index: number) {
//     console.log(index);
// }
// function log(...args : any[]) {
//   switch(args.length) {
//     case 1:
//       return logClass.apply(this, args);
//     case 2:
//       return logProperty.apply(this, args);
//     case 3:
//       if(typeof args[2] === "number") {
//         return logParameter.apply(this, args);
//       }
//       return logMethod.apply(this, args);
//     default:
//       throw new Error("Decorators are not valid here!");
//   }
// }



//  
// target : 类的原型方法
// propertyKey：方法的名字。
// descriptor：成员属性描述。
// function f() {
//   console.log("f(): evaluated");
//   return function (
//     target:any, propertyKey: string, descriptor: PropertyDescriptor
//     ) {
//       console.dir(target)
//       console.dir(propertyKey)
//       console.log(target[propertyKey]);
//       // console.log(descriptor)
//       const oldFunction = target[propertyKey];
//       const newf = (...args: any[]) => {
//         oldFunction.call(target, ...args);
//         console.log('jieshule')
//       }
//       descriptor.value = newf; // 替换原声
//     }
// }

// // @f()
// // function f1() {
// //   console.log('haha')
// // }

// class C {
//   @f()
//   f1(p: string) {
//     let j = 1;
//     for (let i:number = 0; i <= 1000000000; i++){
//       j = i %2 ===0 ? j + 1: i+ 3;
//     }
//     console.log('haha')
//     console.log(p)
//     setTimeout(() => {
//       console.log('yanchi')
//     }, 2000)
//     return j
//   }
// }

// new C().f1('yuyuyu')

// Reflect Metadata
// 在声明的时候「添加和读取元数据」
// npm i reflect-metadata --save
// 在 tsconfig.json 中配置 emitDecoratorMetadata.
// import Reflect from Reflect
import 'reflect-metadata'
@Reflect.metadata('name', 'B')
class A {
  @Reflect.metadata('hello', 'world')
  public hello(): string {
    return 'hello world'
  }
}


Reflect.getMetadata('name', A) // 'A'
Reflect.getMetadata('hello', new A()) // 'world'
Reflect.defineMetadata('hahah', 'woaini', A)
console.log(Reflect.getMetadata('hahah', A))  // woaini