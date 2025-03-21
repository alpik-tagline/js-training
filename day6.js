// function greet(){
//     console.log("hey")
// }

// setTimeout(greet,5000)
// console.log(greet)

// function greet1(){
//     console.log("hey")
// }

// let interval = setTimeout(greet1,3000)
// console.log('id:'+interval)

// function showtime(){
//     let dateTime  = new Date()

//     let time = dateTime.toLocaleTimeString()

//     console.log(time)

//     setTimeout(showtime,3000)
// }

// showtime()

// let count = 0

// function increaseCount(){
//     count+=1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount,3000)

// clearTimeout(id)

// console.log("set timeout stopped")

// function greet(name,lastname){
//     console.log('Hello' + " " + name + " " + lastname)
// }

// setTimeout(greet,5000,"Aditya","Tare")

// function greet(name){
//     console.log("Hi" + " " + name)
// }

// greet('Peter')

// function greet(name, callback) {
//     console.log("hi" + ' ' + name)
//     callback()
// }

// function callme() {
//     console.log('i am callback function')
// }

// greet('Peter',callme)

// function greet(){
//     console.log("hey")
// }

// function sayname(name){
//     console.log('hello' + ' ' + name)
// }

// setTimeout(greet,3000)
// sayname('john')

// function greet(name,myfun){
//     console.log('hello world')
//     myfun(name)
// }

// function sayname(name){
//     console.log('hello' + ' ' + name)
// }

// setTimeout(greet,4000,'John',sayname)

// let count = true

// let countvalue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("there is a count value")
//     } else {
//         reject("there is no count value")
//     }
// })

// console.log(countvalue)

// let countvalue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved")
// })

// countvalue
//     .then(function successValue(result) {
//         console.log(result)
//     })

//     .then(function successValue1(){
//         console.log("you can call multiple functions this way")
//     })

// let countvalue = new Promise(function (resolve,reject){
//     resolve('Promise Resolve')
// })

// countvalue.then(
//     function successValue(result){
//         console.log(result)
//     }
// )

// .catch(
//     function errvalue(result){
//         console.log(result)
//     }
// )

// countvalue.finally(
//     function greet(){
//         console.log('this is code')
//     }
// )


// async function f() {
//     console.log('async function')
//     return Promise.resolve(1)
// }

// f()


// async function f(){
//     console.log('async function')
//     return Promise.resolve(1)
// }

// f().then(function(result){
//     console.log(result)
// })


// let result = await promise;

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('Promise resolved')
//     },4000)
// })

// async function async(){
//     let result = await promise

//     console.log(result)
//     console.log('hello')
// }

// async()

// let promise1
// let promise2
// let promise3

// async function asyncFunc() {
//     let res1 = await promise1
//     let res2 = await promise2
//     let res3 = await promise3

//     console.log(res1)
//     console.log(res1)
//     console.log(res1)
// }

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise resolved')
//     }, 4000)
// })

// async function async() {
//     try {
//         let result = await promise

//         console.log(result)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// async()

// function greet(){
//     console.log('hello world')
// }

// setInterval(greet,1000)


// function greet(){
//     console.log("hey hey")
// }

// setInterval(greet,5000)

// function showTime(){
//     let dateTime = new Date()

//     let time = dateTime.toLocaleDateString()

//     console.log(time)
// }

// let display = setInterval(showTime,5000)


// let count  = 0

// let interval = setInterval(function(){
//     count+=1

//     if(count === 10){
//         clearInterval(interval)
//     }

//     let dateTime = new Date()
//     let time = dateTime.toLocaleDateString()
//     console.log(time)
// })

// function greet(name,lastname){
//     console.log('hello' +  ' '+ name + " " + lastname )
// }

// setInterval(greet,4000,'Aditya','Tare')

// {
//     "name": "Mohan",
//     "age" : 22,
//     "gender" : "male"

// }

// const data = {
//     "name":"John",
//     "age":22,
//     "hobby":{
//         "reading" : true,
//         "gaming":false,
//         "sport": "football"
//     },
//     class :["JS","HTML","CSS"]
// }

// console.log(data.name)
// console.log(data.hobby)

// console.log(data.hobby.sport)
// console.log(data.class[1])
// console.log(data["name"])

// const jsonData = '{"name":"john","age":22}';

// const obj = JSON.parse(jsonData)

// console.log(obj.name)

// const jsonData = '{"name":"john","age":22}';

// const obj = JSON.stringify(jsonData)

// console.log(obj)

// const timeNow = new Date()
// console.log(timeNow)

// const time1 = new Date(0)

// console.log(time1)

// const time2 = new Date(10000000000)

// console.log(time2)

// const date = new Date ("2020-07-01")

// console.log(date)

// const date = new Date("2020-07")
// console.log(date)

// const date1 = new Date("2020")
// console.log(date1)

// const date = new Date("03/25/2015")
// console.log(date)

// const date1 = new Date("Jul 1 2020")
// console.log(date1)

// const time1 = new Date(2020,1,20,4,12,11,0)
// console.log(time1)

// const time1 = new Date(2020, 1, 20, 4)
// console.log(time1)

// const time1 = new Date(2020,1)
// console.log(time1)

// let ima = Date.now()
// console.log(ima)

// let time = new Date
// console.log(time)

// const date = time.getDate()
// console.log(date)

// const year = time.getFullYear()
// console.log(year)

// const utcDate = time.getUTCDate()
// console.log(utcDate)

// const eventt = new Date('Feb 19, 2020 23:15:30')

// console.log(eventt)

// eventt.setDate(15)

// console.log(eventt.getDate())

// const currentDate = new Date()
// const date = currentDate.getDate()
// const month = currentDate.getMonth()
// const year  = currentDate.getFullYear()

// const whole = date + " " + month + " " + year
// console.log(whole)

// function greet(name){
//     function display(){
//         console.log('hi' + " " + name)
//     }
//     display()
// }

// greet('john')

// function greet(name){
//     function displayName(){
//         console.log('hi'+ ' ' + name)
//     }
//     return displayName;
// }

// const g1 = greet('john')
// g1()

// function greet(){
//     let name = 'John'

//     function displayName(){
//         return 'hi' + ' ' + name
//     }

//     return displayName
// }

// const g1 = greet()
// console.log(g1)
// console.log(g1())


// function cal(x){
//     function multiply(y){
//         return x * y
//     }
//     return multiply
// }

// const multiply3 = cal(3)
// const multiply4 = cal(4)

// console.log(multiply3(cal(6)))
// console.log(multiply4(cal(2)))

// let a = 0
// function sum() {
//     function increaseSum() {
//         return a = a + 1
//     }
//     return increaseSum
// }

// const x = sum()
// console.log(x())
// console.log(x())
// console.log(x())


// function sum(){
//     let a = 0;
//     function increaseSum(){
//         return a = a + 1
//     }
//     return increaseSum
// }

// let x = sum()
// let a = 5

// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())
// console.log(x())

// let a = this
// console.log(a)

// this.name = 'Sarah'
// console.log(window.name)

// function greet(){
//     console.log(this)
// }

// greet()

// function Person(){
//     this.name = 'Jack'
//     console.log(this)
// }

// let person1 = new Person()
// console.log(person1.name)

// const person = {
//     name:"Jack",
//     age:25,

//     greet(){
//         console.log(this)
//         console.log(this.name)
//     }
// }

// const person = () =>{
//     console.log(this)
// }

// const greet = {
//     name :'Jack',

//     sayhi(){
//         let hi = () => console.log(this.name)
//         hi()
//     }
// }

// greet.sayhi()

// const person = {
//     name:"jack",
//     age:25,

//     greet(){
//         console.log(this)
//         console.log(this.age)

//         let innerFunc = () =>{
//             console.log(this)
//             console.log(this.age)
//         }
//         innerFunc()
//     }
// }
// person.greet()

// const arr = [1,2,3]

// const all = arr[Symbol.iterator]()

// console.log(all)

// const str = 'hello'

// const stri = str[Symbol.iterator]()

// console.log(stri)

// const number  = [1,2,3]

// for(let n of number[Symbol.iterator]()){
//     console.log(n)
// }

// const arr= ['h','e','l','l','o']

// let arri = arr[Symbol.iterator]()

// console.log(arri.next())
// console.log(arri.next())
// console.log(arri.next())
// console.log(arri.next())
// console.log(arri.next())
// console.log(arri.next())
// console.log(arri.next())
// console.log(arri.next())
// console.log(arri.next())

// const arr= ['h','e','l','l','o']

// for(let i of arr){
//     console.log(i)
// }

// function displayElements(arr) {

//     let n = 0;

//     return {

//         next() {

//             if(n < arr.length) {
//                 return {
//                     value: arr[n++],
//                     done: false
//                 }
//             }

//             return {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }

// const arr = ['h', 'e', 'l', 'l', 'o'];

// const arrIterator = displayElements(arr);

// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());

// function* gene(){
//     console.log("1 code 1st")
//     yield 100;

//     console.log("2 code before")
//     yield 200
// }

// const gene = genefactor()

// console.log(gene.next())

// const iterableObj = {
//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1) {
//                     return { value: '1', done: false };
//                 }
//                 else if (step === 2) {
//                     return { value: '2', done: false };
//                 }
//                 else if (step === 3) {
//                     return { value: '3', done: false };
//                 }
//                 return { value: '', done: true };
//             }
//         }
//     }
// }

// for (const i of iterableObj) {
//     console.log(i);
// }


// function* genefun() {
//     yield 100;

//     return 123

//     console.log("2 dfssdfdf")
//     yield 200
// }

// const gene = genefun()

// console.log(gene.next())


// function* generatorFunc() {
//     yield 100;
//     yield 200;
// }

// const generator = generatorFunc();

// console.log(generator.next());

// console.log(generator.throw(new Error('Error occurred.')));
// console.log(generator.next());

// let a = 5
// let b = 'sdds'
// let c = a + b
// console.log(c)

// let a = 6
// let b = 9
// let c = a * b
// console.log(c)