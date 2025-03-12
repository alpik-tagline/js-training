// function fun(n1, n2) {
//     return n1 * n2
// }

// console.log(fun(5, 5))

// let msg = "hello tagline"

// console.log(msg)


// let price = 500

// console.log("Product price is ", price)

// let message = `The product price is ${price}`
// console.log(message)

// let value = Symbol('hello')
// console.log(value)

// let a;
// console.log(a)

// let n
// let bign = BigInt("3223423434534535503455")
// console.log(bign)

// function cons(str1, str2) {
//     return str1 + str2
// }

// console.log(cons("hey", " hehy1ß"))


// let x = 5
// console.log("add", x + 1)
// console.log("sub", x - 50)
// console.log("add", ++x)
// console.log("sub", --x)


// let aa = 5

// // aa +=10
// // console.log("adda", aa)

// aa -= 2
// console.log("sub", aa)

// const c = 3, b = 2
// console.log(c > b)

// const str1 = "Hey"
// const str2 = "hey1"

// console.log(str1 + " " + str2)

// console.log(typeof (str1))

// let numbers = [1, 2, 4, 5, 6, 7]
// console.log(...numbers)

// let fruits1 = ["Apple", "Banana"]
// let fruits2 = ["Grapes", "Mango"]
// let fruits3 = ["Mango1", "Mango2"]

// let newfruits = ["newf", ...fruits3, "dssd", "Fds"]
// console.log(newfruits)

// let obj = { x: 1, y: 2 }
// let obj1 = { z: 2 }

// const mix = { ...obj, ...obj1 }
// console.log(mix)

// let printf = function (...args) {
//     console.log(args)
// }

// printf(2)
// printf(1, 2, 4, 5, 6, 7, 8)

// function sum(s1, s2, s3, s4) {
//     console.log(s1 + s2 + s3 + s4)
// }

// let tot = [1, 2, 3, 1]

// sum(...tot)

// const arr = ["test", "test1", "test2", "test3"]
// arr.push("test4")
// console.log(arr)

// arr.splice(1, 2, "testn")
// console.log(arr)


// naam = "Back"
// console.log("hello " + naam)

// let n4 = Number("5")
// console.log(typeof (n4))

// let n5 = String(5)
// console.log(typeof (n5))

// let a1 = 10, a2 = 11
// console.log(a1 < a2)

// console.log(a1 !== a2)
// console.log(a1 == a2)

// console.log("check", 2 === "2")

// const x1 = 5, y = 3

// console.log((x < 6) && (y < 5))
// console.log((x1 < 2) || (y < 5))

// function check5(num) {
//     if (num > 5) {
//         console.log("yes!")
//     }
// }

// check5(8)

// let score = 16;

// if (score >= 17) {
//     console.log("you have passed the test")
// } else {
//     console.log("don't give up try again!!")
// }

// let marks = 31
// if (marks >= 40) {
//     console.log("Very good")
// } else if (marks >= 30) {
//     console.log("good")
// } else if (marks >= 20) {
//     console.log("don't give up")
// }

// // const ent = prompt("Enter Number")

// // const num = Number(ent)

// // if(num>0){
// //     console.log("pos number")
// // }else{
// //     console.log("neg number")
// // }

// let m1 = 81

// if (m1 >= 40) {
//     if (m1 >= 80) {
//         console.log("great!!")
//     }
//     else {
//         console.log("Passed")
//     }
// }
// else {
//     console.log("Don't give up")
// }

// for (let i = 1; i <= 6; i++) {
//     console.log(i)
// }

// let sum1 = 0
// let n1 = 5

// for (let i = 1; i <= n1; i++) {
//     sum1 += i;
// }

// console.log(`sum: ${sum1}`)


// const fruits = ["test1","test2","test3"]

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// let a = 1
// while (a <= 10) {
//     console.log(a)
//     a++
// }

// let a = 5
// do {
//     console.log(a)
//     a--
// } while (a > 0)

// for (let i = 1; i <= 5; i++) {
//     if (i == 3) {
//         console.log("3 arrived")
//         break;

//     }
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     if (i > 4 && i < 9) {
//         continue
//     }
//     console.log(i)
// }

// let day = "Wendesday"

// switch (day) {
//     case "Monday":
//         console.log("Workday")
//         break;

//     case "Tuesday":
//     case "Wendesday":
//         console.log("work2")
//         break;

//     case "Thursday":
//     case "Friday":
//         console.log("weekend is coming")
//         break;
// }

// let light = "red"
// let msg = ""

// switch(light){
//     case "red":
//     msg = "Don't move"
//     break;

//     case "green":
//     msg = "Move"
//     break;

// }

// console.log(msg)


// let number1 = Number(prompt("Enter n1"))
// let number2 = Number(prompt("Enter n2"))

// let op = prompt("Enter op")

// switch(op){
//     case "+":
//         result = number1 + number2
//         console.log(`${number1} + ${number2} = ${result}`)
//         break;

//     case "-":
//         result = number1 - number2
//         console.log(`${number1} - ${number2} = ${result}`)
//         break;

// }

// function basic(num1, num2, op) {


//     switch (op) {
//         case "+":
//             return num1 + num2

//         case "-":
//             return num1 - num2
//     }
// }



// const res = basic(2, 3, "+")
// console.log(res)

// for (let i=1;i<=5;i++){
//     if(i == 3 ){
//         console.log("3 aavi gyo!")
//         continue;
//     }
//     console.log(i)
// }


// for(let i=1;i<=5;i++){
//     if(i==3){
//         console.log("3 aavi gyo")
//         break;
//     }
//     console.log(i)
// }

// let a =1
// while(a<=10){
//     console.log(a)
//     a++
// }

// let a = 1
// do{
//     console.log("do while",a)
//     a++
// }while(a<=10)

// for(let i = 0;i<=5;i++){
//     console.log(i)
// }

// let fruits = ["apple","banana","test"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// let f1 = ["banana","mango"]
// let f2 = ["grapes","chips"]
// let f3 = [...f1,...f2,"ds","DF"]
// console.log(f3)




