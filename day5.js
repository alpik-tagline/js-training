let b = 100

try{
console.log(a)
}catch(error){
    console.log("an error occurred" + error)
}finally{
    console.log("I am always run")
}


let a =10
try {
    setTimeout(function () {
        console.log(b)
    },3000)
}catch(error){
    console.log("won't work",error)
}

let b =10
setTimeout(function(){
    try{
        console.log(a)
    }catch(error){
        console.log("error occurred",error)
    }
},3000)

let number =40;
try {
    if (number > 50) {
        console.log('Success')
    } else {
        throw new Error('The number is low')
    }
    console.log('hello')
} catch (error) {
    console.log("an error occurred")
    console.log("error message", +error)
}

const number = 11
try{
    throw new Error('This is the throw')
}
catch(error){
    console.log('an err occurred')
    if(number > 10){
        console.log("number is less than 10"+error)
        console.log('Error resolved');
    }
    else{
        throw new Error('The value is low')
    }
}

function person(name){
    return `Hello ${name}`
}

console.log(person("Aditya Tare"))

const fruit = "Apple"
console.log(fruit)
fruit = "Banana"
console.log(fruit)

const fname = "Aditya"
const lname = "Tare"

console.log("Hello" + " " + fname + " " + lname)
console.log(`Hello my name is ${fname} and my last name is ${lname}`)

function sum(numA,numB){
    console.log(numA + numB)
}

console.log(sum(5,10))

let pr = (x,y) =>{
    return x * y
}

console.log(pr(5,5))

function person(name){
    this.name = name
}

var p1 = new person("Aditya")
var p2 = new person("Tare")

console.log(p1.name)
console.log(p2.name)

class person{
    constructor(name){
        this.name = name
    }
}

let p1 = new person("John")
let p2 = new person("Abrahim")

console.log(p1.name)

const hospital = {
    doctors: 25,
    patients: 44,
}

let doctors = hospital.doctors
let patients = hospital.patients

console.log(doctors)
console.log(patients)


let {doctors,patients} = hospital

console.log(doctors)
console.log(patients)


let countvalue = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolve")
    },5000)
})

countvalue.then(function successValue(result){
    console.log(result)
})

function show(a, b, ...args) {
    console.log("a:", a)
    console.log("b:", b)
    console.log("args", args)
}
show(1,2,3,4,5,6,7,8,9,10)

let numArr = [1, 2, 3]
console.log([numArr, 4, 5])
console.log("with spread op", [...numArr, 4, 5])

const addn = (a,b) => a + b

console.log(addn(5,5))

const hello = () =>"hey"

console.log(hello())

const sqr = x => x*x
console.log(sqr(5))

let n1 = 8 
let n2 = 10

let res = `The sum of ${n1 + n2}`
console.log(res)

function dm(message){
    return message
}

let result = dm`Hello jack`
console.log(result)

let numbers = [1,2,3]
console.log(...numbers)

let fruits = ["Apple","Banana","Cherry"]

let f = ["D","DF","Df","R"]
let d = ["df","SDf","DS","SDF"]

let res = [...fruits,...d,...f]
console.log(res)

let obj1 = { x: 1, y: 2 }
let obj2 = { z: 3 }
let obj3 = { ...obj1, ...obj2 }

console.log(obj3)

const map1 = new Map()
console.log(map1)

let map1 = new Map()

map1.set('info',{name:'Jack',age:26})
console.log(map1)

let map2 = new Map()

let obj = {}
map2.set(obj,{name:'Jack',age:"26"})
console.log(map2)

let map1 = new Map()
map1.set('info',{name:'jack',age:'26'})

map1.delete('info')
console.log(map1)

let map1 = new Map()
map1.set('name', 'jack')
map1.set('age', '27')

for (let [key, value] of map1) {
    console.log(key + '-' + value)
}

let map1 = new Map()
map1.set('name','jack')
map1.set('age','27')

map1.forEach(function(value,key){
    console.log(key + '-' + value)
})

let map1 = new Map()
map1.set('name','jack')
map1.set('age','27')

for(let value of map1.values()){
    console.log(value)
}

let map1 = new Map()
map1.set('name', 'jack')
map1.set('age', '34')

for (let key of map1.keys()) {
    console.log(key)
}

let map1 = new Map()
map1.set("name","jack")
map1.set("surname","churco")

for(let elem of map1.entries()){
    console.log(`${elem[0]}:${elem[1]}`)
}

let map1 = new Map()
map1.set('name', 'jack')
map1.set('age', '23')

for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`)
}

const weakMap = new WeakMap()
console.log(weakMap)

let obj = {}

weakMap.set(obj,'hello')

console.log(weakMap)

const weakMap = new WeakMap()
console.log(weakMap)

let obj= {}

weakMap.set(obj,'hey')

console.log(weakMap)

const person = {
    name: 'Sara',
    age: 25,
    gender: 'Male'
}

let { name, age, gender } = person
console.log(gender)

let name = person.name
let age = person.age
let gender = person.gender
console.log(name)

const person = {
    name:'sara',
    age:25,
    gender:'female'
}

let {name:name1,age:age1,gender:gender1} = person
console.log(name1)

const arr = ['one', 'two', 'three']
const [x, y, z] = arr

console.log(x)


let x = 4
let y = 7

[x,y] = [y,x]

console.log(x)
console.log(y)

const person = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}

const {name,hobbies:{read,playGame}} = person

console.log(read)

class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
    }
}

let person1 = new person("jack", 30)
let person2 = new person("tina", 33)

person1.greet()
person2.greet()


let person = {
    name:'jack',
    age:30,
    greet:function(){
        console.log(`Hello my name is ${this.name} my age is ${this.age}`)
    }
}

const {name,age} =person
console.log(name)

class person{
    constructor(name){
        this.name = name
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }
}

class student extends person{

}

let student1 = new student('jack')
student1.greet()

class person {
    constructor(name, lname) {
        this.name = name,
            this.lname = lname
    }
    greet() {
        console.log(`Hello ${this.name} ${this.lname}`)
    }
}

class Student extends person {
    constructor(name, lname) {
        console.log("create student class")
        super(name, lname)
    }
}


let student1 = new Student('Jack', 'Cash');
student1.greet();

class person {
    constructor(name) {
        this.name = name
        this.occupation = "Tester"
    }

    greet() {
        console.log(`hello ${this.name}`)
    }
}

class Student extends person {
    constructor(name) {
        super(name)

        this.occupation = 'Student'
    }

    greet() {
        console.log(`Hello student ${this.name}`)
        console.log(`occupation` + this.occupation)
    }
}

let p = new Student('jack')
p.greet()

const student = ['john','sara','jack']

for(let ele of student){
    console.log(ele)
}

const string = 'code'

for(let i of string){
    console.log(i)
}

const set = new Set([1, 2, 3])
for (let i of set) {
    console.log(i)
}

creating iterable object

const iterableObj = {

    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

for (const i of iterableObj) {
 console.log(i);
}

function* gen(){
    yield 10;
    yield 20;
    yield 30;
}

const obj = gen()

for(let value of obj){
    console.log(value)
}

let student1 = {
    age: 24,
    name: "felix"
}

const handler = {
    get: function (obj, prop) {
        return obj[prop] ? obj[prop] : "property does not exist"
    }
}

const proxy = new Proxy(student1, handler)
console.log(proxy.name)
console.log(proxy.age)
console.log(proxy.dws)

let student = {
    name:'jack',
    age : 24
}

const handler = {
    get(obj,prop){
        return obj[prop]
    }
}

const proxy = new Proxy(student,handler)
console.log(proxy.name)


let student = {
    name :'',
    age : 23
}

const handler = {
    set : function (obj,prop,value){
        if(obj[prop]){
            console.log('read only')
        }
    }
}

const proxy = new Proxy(student,handler)

proxy.name = 'John'
proxy.age = 33

console.log(proxy.name)

const myfun = () =>{
    console.log("execute this function")
}

const handler = {
    set : function(target,prop,value){
        if(prop === ' name' && value === 'jack'){
            myfun()
        }
        else{
            console.log('only access name property')
        }
    }
}

const proxy = new Proxy({},handler)
proxy.name = 'Jack'
proxy.age = 33
console.log(proxy.name)






