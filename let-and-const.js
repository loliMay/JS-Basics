/**
 * var and Hoisting
 */

// function getValue(condition) {
//   if(condition) {
//     var value = 'blue'
//   } else {
//     console.log(value + ' Here we can visit variable value because of Hoisting.')
//   }
//   console.log(value + ' Here we can visit variable value because of Hoisting.')
// }

// getValue(true) // blue
// getValue(false) // undefined undifined

// the before code can be replaced by the following: 
// var value
// function getValue(condition) {
//   if(condition) {
//     value = 'blue'
//   } else {
//     console.log('Here we can visit variable value because of Hoisting.')
//   }
//   console.log('Here we can visit variable value because of Hoisting.')
// }

// getValue(true)
// getValue(false)

/**
 * 1.1 块级声明 let
 */

// 真正的块级声明 let 关键字
// function getValue(condition) {
//   if(condition) {
//     let value = 'blue'
//   } else {
//     console.log(value + 'Here we can\'t visit variable value.') // Referenceerror: value is not defined
//   }
//   console.log(value + 'Here we can\'t visit variable value.') // ReferenceError: value is not defined
// }

// getValue(true)
// getValue(false)

// var count = 20
// var count = 30 // 用var重声明同一变量会被编译器忽略 

// var count = 30
// let count = 20 // count has aready been declared let禁止重声明 使用起来更加安全

/**
 * 1.2 块级声明 const
 * 常量声明关键字
 * 声明时必须初始化变量 否则会报错
 */

// const peopple // Missing initializer in const declaration

// const maxItems = 30 // define a constant variable

// console.log(maxItems++) // TypeError: Assignment to constant variabl 禁止对常量赋值

// 值得注意的是, let和const声明的都是**块级标志符**

// ★然而，与其它语言不同的是，JavaScript中的常量如果是对象，则对象中的值可以修改。
// ★const声明不允许**修改绑定**, 但允许修改值。

// const person = {
//   name: 'LoliMay'
// }

// person.name = 'George'

// console.log(person.name) // this sentence is true

// person = {  // TypeError: Assignment to constant variable
//   name: 'George'
// }

/**
 * 1.3 临时锁区(Temporal Dead Zone)
 */
// let condition = true
// if(condition) {
//   console.log(typeof value) // ReferenceError: value is not defined. Now value is in the temporal dead zone(aka. TDZ) so we can not visit it.
//   let value = 'blue'
// }

// console.log(typeof value) // undifined. because now it's not in TDZ
// if(true) {
//   let value = 'blue'
// }

/**
 * 1.4 循环中的块级作用域绑定
 */
// for(let i = 0; i<10; i++ ) {
//   console.log(i)
// }
// console.log(i) // ReferenceError: i is not defined

var funcs = []

for(var i=0; i<10; i++ ) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs.forEach(function(func) {
  
})