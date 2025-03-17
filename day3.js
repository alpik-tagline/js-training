// function greet() {
//     console.log("Hey!")
// }
// greet()

// function fname(name) {
//     console.log(`hello ${name}`)
// }

// fname("Test name")
// fname("Aditya sir!")

// function sum(n1, n2) {
//     let sum = n1 + n2
//     console.log(`Sum : ${sum}`)
// }

// sum(1, 2)

// function sum1(n1, n2) {
//     return n1 * n2
// }

// console.log(sum1(5, 5))

// function display() {
//     console.log("hey")
//     return console.log("sddsa")
//     console.log("not shown")
// }

// let mathb = Math.sqrt(64)
// console.log("math", mathb)

// let mpow = Math.pow(2, 4)
// console.log(mpow)

// let upperc = "test uppercase"
// let testup = upperc.toLocaleUpperCase()

// console.log(testup)

// function factorial(num) {
//     if (num === 0 || num === 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }


// console.log(factorial(5));


// function addnumb() {
//     var sum = 5 + 4
//     return sum
// }

// console.log(addnumb(1, 2))

// function hey() {
//     var msg = "hello"

//     console.log(`local: ${msg}`)
// }

// var msg = "Hello"

// function greet() {
//     console.log(`local ${msg}`)
// }

// greet()
// console.log(`outside${msg}`)

// function display_s() {
//     let msg1 = "local"

//     if (true) {
//         let msg1 = "block-level"
//         console.log(`inner scope :${msg1}`)
//     }
//     console.log(`outer scope ${msg1}`)
// }

// display_s()

// console.log(test)

// var test = 5


// hey()
// function hey() {
//     console.log("hey")
// }

// var numb;
// console.log(numb)
// numb = 5

// function counter(count) {
//     console.log(count)

//     if (count > 1) {
//         count = count - 1
//         counter(count)
//     } else {
//         return
//     }
// }

// counter(10)

// function factorial(num) {
//     if (num > 1) {
//         return num * factorial(num - 1)
//     }
//     else {
//         return 1
//     }
// }

// let x = 3
// let y = factorial(x)

// console.log(`${x} is ${y}`)


// const student = {
//     fname: "Aditya",
//     rollno: 32
// }

// console.log(student.fname, student.rollno)
// console.log(student["fname"])

// const person = {
//     name :"bob",
//     hobby : "football"
// }

// person.hobby="Cricket",
// person.favgame="pubg"

// delete person.favgame

// console.log(person)

// const person = {
//     name: "bob",
//     age: 30,

//     greet: function () {
//         console.log("hey bob")
//     }
// }

// person.greet()


// const dog = {
//     name: "Bobby",

//     bark: function () {
//         console.log("woof")
//     }
// }

// dog.bark()


// const human = {
//     name: "John",
//     age: 30,

//     introduciton: function () {
//         console.log(`my name is ${this.name} and age is ${this.age}`)
//     }
// }

// human.introduciton()


// let student1 = {
//     name: "Aditya",
// }

// student1.greet = function () {
//     console.log("hello bellow")
// }

// student1.greet()


// student.greet = function () {
//     console.log("hwy")
// }

// student.greet()


// let str = "concat 1"
// let str2 = "concat 2"

// let str3 = str.concat(str2)
// console.log(str3)


// let arr = [99, 54, 342, 5, 1]
// let s = arr.sort()

// console.log(s)

// const numb123 = Math.random();
// console.log(numb123);

// function Manas() {
//     this.name = "Aditya",
//         this.age = 23
// }

// const manas = new Manas()

// console.log(manas.name)
// console.log(manas.age)

// function Adimanav() {
//     this.name = "John",
//         this.age = 23
// }

// const adimanav = new Adimanav()
// const adimanav1 = new Adimanav()

// console.log(adimanav.name)
// console.log(adimanav1.name)

// function Manushya(person_name, person_age, person_gender) {
//     this.name = person_name,
//         this.age = person_age,
//         this.gender = person_gender

//     this.greet = function () {
//         return (`Hi ${this.name}`)
//     }
// }

// const person1 = new Manushya("John", 23, "male")
// const person2 = new Manushya("Kevil", 25, "female")

// console.log(person1.name)
// console.log(person2.name)

// const person = new Object({ name: "John", age: 30 })

// const name = new String("John")

// const number = new String(57)

// const count = new Boolean(true)

// console.log(name)
// console.log(number)
// console.log(count)

// const student = {
//     firstName: 'Aditya',

//     get getName() {
//         return this.firstName;
//     }
// };

// console.log(student.firstName);
// console.log(student.getName);

// const student123 = {
//     firstName: 'Aditya',

//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// student123.changeName = 'Hey';
// console.log(student123.firstName);


// const student = {
//     firstName: 'Aditya'
// }

// Object.defineProperty(student, "getName", {
//     get: function () {
//         return this.firstName;
//     }
// })

// Object.defineProperty(student, "changeName", {
//     set: function (value) {
//         this.firstName = value
//     }
// })

// console.log(student.firstName)

// student.changeName = 'Sarah'

// console.log(student.firstName)


// function Car() {
//     console.log("Car created!!")
// }

// Car.prototype.color = "Red"

// Car.prototype.drive = function () {
//     console.log(`Driving the car painted in ${this.color}`)
// }

// console.log(`The car's color is ${Car.prototype.color}`)

// Car.prototype.drive()


// function Car(model, year) {
//     this.model = model;
//     this.year = year;
// };

// let c1 = new Car("Mustang", 1964);
// let c2 = new Car("Corolla", 1966);


// Car.prototype.color = "Red";

// Car.prototype.drive = function () {
//     console.log(`Driving ${this.model}`);
// };


// console.log(`${c1.model} color: ${c1.color}`);
// console.log(`${c2.model} color: ${c2.color}`);

// c1.drive();
// c2.drive();

// function Car() {
//     this.color = "Red"
// }

// Car.prototype.color = "Blue"
// Car.prototype.wheels = 4;

// const c1 = new Car()

// console.log(`The car's color us ${c1.color}`);
// console.log(`The car has ${c1.wheels} wheels.`);


//Practicals

// 1.
// given
// arr=['name','tagline','age','5','type':'mnc', .......]

// output
// {
//   "name":"tagline",
//   "age":"5",
//   "type":"mnc"
//   ...
// }



// for (let i = 0; i < arr.length; i++) {
//     let output = []
//     arr[i] += " ", " ";
//     output.push(arr)
//     console.log(output)
//     let res = { ...output }
//     console.log(res)
// }

// let output = {};
// for (let i = 0; i <= arr.length; i += 2) {
//     output[arr[i]] = arr[i + 1];
// }
// console.log(output);

// let map1 = new Map()
// map1.set
// for (let [key, value] of map1) {
//     console.log(key + '-' + value)
// }

// console.log(obj)

// for(let i in obj){
//     let space = " " + obj[i++]
//     console.log(`${i} :${space}`)
// }

// let arr = new Map()
// arr.set['name', 'tagline', 'age', '5', 'type', 'mnc', '.......']
// for (let elem of arr.entries()) {
//     console.log(`${elem[0]}: ${elem[1]}`);
// }

// arr.map((obj,oj1)=>{
//     console.log(obj + oj1)
// })

// for (let i = 0; i < arr.length; i++) {
//     // console.log(" ", arr[i], arr[i + 1])
//     arr.forEach(myfn)
//     function myfn(value, key) {
//         console.log(value + '- ' + key);
//     }
// }

// for(let i in obj){
//     console.log(i)
// }

// for(let i =0 ;i< obj.length;i++){
//     for(let j=0;j<obj[i].length;j++){
//         console.log(obj[i][j])
//     }
// }

// for(let i in obj){
//     console.log(obj[i])
// }

// for(let i =0;i<obj.length;i++){
//     console.log(obj[i] ,obj[i+1])
// }

// for(const [key,value] of Object.entries(obj)){
//     console.log(`${value}`)
// }

// for(let i=0;i<=obj.length;i++){
//     console.log(typeof(arr[i]))
// }

// for (let i in obj) {
//     let output = ""
//     output += i
//     console.log(output[i])
// }

// for (let i = 1; i <= obj.length; i++) {
//     let output = " "
//     output += i
//     console.log(output[i])
// }

// console.log(typeof(obj))

// for(let i=0;i<=obj.length;i++){
//     let output = ""
//     output +=i
//     console.log(output)
// }

// const map = new Map(Object.entries(obj))
// console.log(map)

// obj.forEach(myfun)

// function myfun(item,index,arr){
//     arr[index] = item
// }

// Write the code, one line for each action also print after every action:
// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.
// 5. Remove the property name from the object.

// var user = {
//     name: "John",
//     surname: "Smith",

//     set changeName(newName) {
//         this.name = newName;
//     }
// }

// console.log(user.name)
// user.changeName = "Pete"
// console.log(user.name)
// delete user.name
// console.log(user.name)




//LATEST
var user = {}

console.log(user)
user.name = "John"
user.surname = "Smith"
console.log(user)
user.name = "Pete"
console.log("changed name", user)
delete user.name
console.log("delete user", user)
console.log("remove property name from obj", user)


//Latest
// let arr = ['name', 'tagline', 'age', '5', 'type', 'mnc', `asdasd aasd`,'a sdasdasd'];
// let obj = {};

// for (let i = 0; i < arr.length; i += 2) {
//     obj[arr[i]] = arr[i + 1];
// }
// console.log(obj);

