// /**
//  * 默认参数值
//  */
// function makeRequest(url, timeout = 200, callback = function() {}) {
//   console.log(`${url}\n${timeout}\n${callback}`)
// }

// makeRequest() // undefined 200 function() {}
// makeRequest('http://baidu.com', undefined,function() {
//   console.log('Hello Wolrd')
// })

/**
 * 默认参数值对arguments对象的影响
 */
function mixArgs(first, second='b') {
  console.log(arguments[0] === first) //true
  console.log(arguments[1] === second) //false
  first = 'c'
  second = 'd'
  console.log(arguments[0] === first) //false   存在默认参数值后
  console.log(arguments[1] === second) //false   arguments对象的值不会自动更新了
  console.log(arguments[0], arguments[1], first, second)
}

// function mixArgs(first, second = 'p') {
//   console.log(second) //相当于默认参数是undefined
//   console.log(arguments[0] === first) //true
//   console.log(arguments[1] === second) //false
//   first = 'c'
//   second = 'd'
//   console.log(arguments[0] === first) //false   存在默认参数值后
//   console.log(arguments[1] === second) //false   arguments对象的值不会自动更新了
// }

// mixArgs('Hello') //Hello undefined arguments对象总指的是传进来的参数

/**
 * 默认参数表达式
 */
// let value = 5

// function getValue() {
//   return value++
// }

// function add(first, second = getValue()) {
//   return first + second
// }

// console.log(add(1))
// console.log(add(2))

/**
 * 默认参数的临时死区(TDZ)
 */
// function add(first=second, second) {
//   return first + second
// }

// console.log(add(undefined, 1)) //ReferenceError: second is not deifined

/**
 * 函数的不定参数
 */
// function pick(object, ...keys) { //这里用到了函数的不定参数
//   let result = Object.create(null)

//   for(let i=0; i<keys.length; i++) {
//     result[keys[i]] = object[keys[i]]
//   }
//   console.log(arguments.length)
//   return result
// }

// const book = {
//   title: 'Understanding ES6',
//   author: 'Nicholas C. Zakas',
//   year: 2016
// }

// const bookData = pick(book, 'title', 'year')

// console.log(bookData)

/**
 * 增强的Function构造函数
 */
// const add = new Function('first', 'second=first', '...others', 'return second+others[0]')
// console.log(add(1, undefined, 99, 4))

/**
 * ... 参数运算符
 */
// function maxOfArray(array) {
//   return Math.max(...array) //将数组展开成参数的形式
// }
// console.log(maxOfArray([1,2,4,4,88,-9]))

/**
 * name属性
 * name属性只是协助调试用的额外信息，所以不能使用name属性来获取对于函数的引用
 */
// const doSomething = function doSomethingElse() {
//   //空函数
// }

// const person = {
//   get firstName() {
//     return 'LoliMay'
//   },
//   sayName: function() {
//     console.log(this.name)
//   }
// }

// console.log(doSomething.name) //doSomethingElse
// console.log(person.sayName.name) //sayName
// console.log(person.firstName.name) //undefined
// const descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')
// // console.log(descriptor.set.name) //set foo
// console.log(descriptor.get.name) //get firstName

/**
 * 明确函数的多种用途
 */
// function Person(name) {
//   this.name = name
// }

// const person = new Person('LoliMay')
// const notAPerson = Person('LoliMay')

// console.log(person+notAPerson) //[object Object]undefined

/**
 * 元属性(Metaproperty) new.target
 */
// function Person(name) {
//   if(typeof new.target !== 'undefined') { //typeof比较是类型的小写字符串形式
//     this.name = name
//   } else {
//     throw new Error('必须通过new关键字来调用Person')
//   }
// }

// const person = new Person('Nicholas')
// const notAPerson = Person.call(person, 'LoliMay')

// console.log(person+notAPerson)

/**
 * 块级函数
 */
// if(true) {
//   console.log(typeof doSomething) //'function'

//   function doSomething() {
//     console.log('Hello, I am doSomething.')
//     return 'OK'
//   }
// }

// console.log(doSomething())

/**
 * 箭头函数
 */
// function traditionalFunction(app, app) {
//   return arguments[0]+arguments[1]
// }

// console.log(traditionalFunction(1,99))

// console.log((app, app) => { //Duplicate parameter name not allowed in this context
//   return app+app
// })

// 单一参数

// const reflect = value => value

// console.log(reflect) //[Function: reflect]

//实际上相当于

// let reflect = function(value) {
//   return value
// }

// let getName = () => 'Nicholas'

// console.log(getName) //Function: getName

//实际上相当于

// let getName = function() {
//   return 'Nicholas'
// }

/**
 * 创建立即执行函数表达式
 */
// const person = function(name) {
//   return {
//     getName: function() {
//       return name
//     }
//   }
// }('LoliMay') //IIFE

//也可以用箭头函数写
// const person = (name => ({
//   getName() {
//     return name
//   }
// }))('LoliMay')

// console.log(person.getName())
// console.log(person)

/**
 * 箭头函数没有this绑定
 */
// 具体demo请查看同目录下 箭头函数没有this绑定.html

/**
 * 箭头函数和数组
 */

// const values = [9, 2, 5, 1],
//       result = values.sort((a, b) => b-a) //递减序列

// console.log(result)

/**
 * 箭头函数没有arguments绑定
 */
// const outerFunc = function() {
//   return (() => arguments[0])() //这里箭头函数引用的是outerFunc的arguments对象
// }

// console.log(outerFunc(5))

/**
 * 箭头函数的辨识方法
 */
const comparator = (a, b) => a-b
console.log(typeof comparator) //'function'
console.log(comparator instanceof Function) //true

/**
 * 尾调用优化
 * 具体内容请查看我的博客 www.lolimay.cn 右上角搜索 ES6学习札记
 */