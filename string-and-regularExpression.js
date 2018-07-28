// function is32Bit(c) {
//   return c.codePointAt(0) > 0xFFFF
// }

// console.log('𠮷'.codePointAt(0))
// console.log(is32Bit('𠮷'))
// console.log(is32Bit("a"))
// // console.log(String.fromCodePoint(134071))
// const arr = []
// for(let i=134071; i<144071; i++ ) {
//   arr.push(String.fromCodePoint(i))
// }
// console.log(arr.join(' '))

// let a = 5,
//     b = 3
// console.log(a+b)

/**
 * 正则表达式y修饰符
 * 和g修饰符一样可以被执行多次，但是必须要在开始处匹配
 */
// let text = '1hello1 hello2 hello3',
//     pattern = /hello\d\s?/,
//     result = pattern.exec(text)
//     globalPattern = /hello\d\s?/g,
//     globalResult = globalPattern.exec(text),
//     stickyPattern = /hello\d\s?/y,
//     stickyResult = stickyPattern.exec(text)

// console.log(result[0])
// console.log(globalResult[0])
// console.log(stickyResult[0]) //必须要从开始处匹配

/**
 * 更改正则表达式的复制行为
 */
// let re1 = /ab/i,
//     re2 = new RegExp(re1, 'ig') //在ES5中报错但在ES6中不会报错
// console.log(re1 +'\n' + re2)

/**
 * 新增flags属性
 */
// let reg = /hello\d\s/gi //获取正则表达式的源
// console.log(reg.source + '\n' + reg.flags) //获取正则表达式的修饰符

/**
 * 模板字面量
 */
// console.log(`这是一个模板字面量"'单引号和双引号不需要转义\`反撇号需要转义`)

/**
 * 使用模板字面量创建多行字符串的最佳实践
 */
// let html = `
// <div>
//   <h1>这是一个标题</h1>
// </div>`.trim()
// console.log(html)

// let name = 'lolimay',
//     message = `Hello, ${name}!`
// console.log(message)

// let count = 5,
//     price = 0.25,
//     message = `The total is $${count * price}.`
// console.log(message)

/**
 * 标签模板
 */
// function tag(literals, ...substitutions) {
//   let result = ''
//   for(let i=0; i<substitutions.length; i++) {
//     result += literals[i]
//     result += substitutions[i]
//   }
//   // result += literals[substitutions.length] //合并最后一个literal
//   return result
// }

// let count = 5,
//     price = 0.25,
//     message = tag`${count} items cost $${(count * price).toFixed(3)}.`

// console.log(message)

/**
 * 访问原生字符串信息 String.raw()
 */
let rawstr = String.raw`\nitems cost\thaha.`
console.log(rawstr)