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
function maxOfArray(array) {
  return Math.max(...array) //将数组展开成参数的形式
}
console.log(maxOfArray([1,2,4,4,88,-9]))