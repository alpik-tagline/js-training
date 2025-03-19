// const age = [21,34,5,56,67,8]
// console.log(age)

// const fruits = ["apple","grapes","banana"]
// console.log(fruits)

// console.log(fruits[1])

// fruits.push("pushtest fruits")
// console.log(fruits)

// fruits.unshift("unshift fruit test")

// console.log(fruits)

// fruits[1] = "mohan"

// console.log(fruits)

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.splice(1,3)

// console.log(numbers)

// let arr = [1,2,3,4,5]
// let arr1 = [6,7,8,9,10]
// let arr3 = arr.concat(arr1)

// console.log("concat",arr3)

// let items = ["JS", 1, "a", 3]

// console.log("arr", items)
// let itemsstring = items.toString()

// console.log(itemsstring)

// let language = ["Java","Java Script","Python"]
// console.log(language.indexOf("Java Script"))

// var plist =[7,33,45,6,33,34,54]

// var oct1 = findAllIndex(plist,33)

// console.log(oct1)

// function checkOrAdd(array, element) {
//     if (array.indexOf(element) === -1) {
//         array.push(element)
//         console.log("not found")
//     } else {
//         console.log(element + "is already in array")
//     }
// }

// var parts = ["Monitor", "keyboard", "Mouse", "Speacker"]

// checkOrAdd(parts, "CPU")

// console.log(parts)

// checkOrAdd(parts, "Mouse");

// let numbers = [1, 3, 4, 6, 9, 8];

// function isEven(element){
//     return element % 2 == 0
// }

// let even = numbers.find(isEven)

// console.log(even)

// function findod(element){
//     return element % 2 == 1
// }

// let odd = numbers.find(findod)
// console.log(odd)

// const team = [
//     {
//         name: "Bill",
//         age: 10
//     },
//     {
//         name: "Chill",
//         age: 12
//     },
//     {
//         name: "Gill",
//         age: 24
//     },
// ]

// function isAdult(member) {
//     return member.age >= 18
// }

// console.log(team.find(isAdult))

// const data =[[1,2,3],[1,2,4],[4,5,6]]

// console.log(data)

// let student1 = ['Jack',24]
// let student2 = ['Sara',23]
// let student3 = ['Peter',24]

// let stds = [student1,student2,student3]

// console.log(stds)

// let x = [
//     ['jack',24],
//     ['sara',23],
//     ['pater',25]
// ]

// console.log(x[0])
// console.log(x[1])
// console.log(x[2][0])

// let studentdata = [["jack",24],["Sara",23]]

// studentdata[1][2] = "Hello"

// console.log(studentdata)

// let stddata = [["jack",24], ["Sara",23]]

// stddata.push(["Peter",24])

// console.log(stddata)

// stddata[1].push("hello")

// console.log(stddata)

// stddata[2].push("bello")

// console.log(stddata)

// let studentData = [['Jack',24],['Sara',23]]
// studentData.splice(0,1)
// console.log(studentData)

// let studentdata = [["Jack", 24], ["Sara", 23]]

// for(let i =0 ;i< studentdata.length;i++){
//     for(let j=0;j<studentdata[i].length;j++){
//         console.log(studentdata[i][j])
//     }
// }

// studentdata.forEach((std)=>{
//     std.forEach((data)=>{
//         console.log(data)
//     })
// })

// for (let i of studentdata) {
//     for (let j of i) {
//         console.log(j)
//     }
// }

// let mname = "John"
// let surname ="Parker"
// let res = `The names are ${name} and ${surname}`

// console.log(res)

// console.log(mname[1])


// let msg = "Hello"

// console.log(msg[3])
// console.log(msg.charAt(1))

// const student = {
//     name:"Bheem",
//     class:12
// }

// for(let key in student){
//     console.log(`${key} => ${student[key]}`)
// }

// const sal = {
//     jack:24000,
//     Paul : 34000,
//     Monica : 55000
// }

// for(let i in sal){
//     let salary = "$" + sal[i]
//     console.log(`${i}:${salary}`)
// }

// const string = 'Code'

// for(let i in string){
//     console.log(string[i])
// }

// const arr = ["Hello",1,"Java Script"]

// for(let x in arr){
//     console.log(arr[x])
// }

// let num = 5
// let num2 = 3.13

// console.log(num)
// console.log(num2)

// const value1 = Symbol('Hello')
// const value2 = Symbol('Hello')

// console.log(value1 === value2)

// const x = Symbol()

// typeof x;

// console.log(x)

// const x = Symbol('hey')
// console.log(x.description)

// let id = Symbol("id")

// let person = {
//     name :"Cash",
//     [id]:123
// }
// console.log(person)

// given
// [1,232,1,-2123,-21,213,-2123,1]
// output
// [1,232,1,213,1,-2123,-21,-2123]

// let rev = [1, 232, 1, -2123, -21, 213, -2123, 1]
// let pos = []
// let neg = []

// for (let num of rev) {
//     if (num > 0) {
//         pos.push(num)
//     } else {
//         neg.push(num)
//     }
// }

// let output = pos.concat(neg)
// console.log(output)

// given
// [[1,232,1,-2123,-21,213,-2123,1],[1,232,1,-2123,-21,213,-2123,1],[1,232,1,-2123,-21,213,-2123,1],[1,232,1,-2123,-21,213,-2123,1],[1,232,1,-2123,-21,213,-2123,1]]
// output
// [1,232,1,213,1,-2123,-21,-2123,1,232,1,-2123,-21,213,-2123,1,1,232,1,-2123,-21,213,-2123,1,1,232,1,-2123,-21,213,-2123,1,1,232,1,-2123,-21,213,-2123,1]

// let merge = [[1, 232, 1, -2123, -21, 213, -2123, 1], [1, 232, 1, -2123, -21, 213, -2123, 1], [1, 232, 1, -2123, -21, 213, -2123, 1], [1, 232, 1, -2123, -21, 213, -2123, 1], [1, 232, 1, -2123, -21, 213, -2123, 1]]

// let res = [].concat(...merge)

// console.log(res?.toString())

// given
// {
//     name:"Hello", value:1,
//     name:"world", value:2,
//     name:"Hello", value:1,
//     name:"JS", value:3,
//     name:"RN", value:4,
//     name:"JS", value:3
// }
// output
// ["Hello","world","JS","RN"]  // all unique names in any order

// let data = [
//     { name: "Hello", value: 1 },
//     { name: "world", value: 2 },
//     { name: "Hello", value: 1 },
//     { name: "JS", value: 3 },
//     { name: "RN", value: 4 },
//     { name: "JS", value: 3 }
// ];

// const uNames = [...new Set(data.map(item => item.name))];
// console.log(uNames);

// given
// arr=['name','tagline','age','5','type':'mnc', .......]

// output
// {
//   "name":"tagline",
//   "age":"5",
//   "type":"mnc"
//   ...
// }
// const uNames = [...new Set(data.map(item => item.name))];

// function displayUnique() {
//     console.log(`${this.name}`)
// }

// order.displayUnique = displayUnique
// order.displayUnique()

// for (let i = 0; i <= order.name; i++) {
//     console.log(order[i])
// }

// for (let i in order.name) {
//     console.log(order.name[i]);
// }

//Latest
// let url = ""

// switch (url) {
//     case ".../TraneeProgram.txt":
//         console.log("File name is - TraneeProgram.txt & extension is - txt")
//         break;

//     default:
//     case "":
//         console.log("Invalid URL")
//         break;
// }

// Case1 url = any string ...
// /xyz.xyzakljdsiashd

// output : print this line 
// "File name is - TraneeProgram.txt & extension is - txt"

// let url = "www.tagline/trainee.txt"

// if (url.charAt(4) == "." && url.charAt(-4) == ".") {
//     let search = url.slice(4)
//     let extension = url.slice(-4)
//     console.log(`File name is ${search} and extension is ${extension}`)
// }
// else {
//     console.log("Invalid URL")
// }

// 1. split string into parts from  '/'
// 2. get last part
// 3. check if last part contains '.'
// - if not invalid url
// 4. split last part from '.'
// 5. get last part which will be your extension
// 6. combine all other parts and that string will be your filename

let url = "www.tagline/trainee.document.txt"
let urlsplit = url.split("/")
console.log(urlsplit)

let newurl = urlsplit.slice(1)
console.log("newurl", newurl)

let latesturl = newurl.includes(".")
console.log("latest", latesturl)

// let newarr = latesturl.toString()
// console.log("str", typeof (newarr))

// console.log("newarr", newarr)

// let newnew = newarr.includes(".")
// console.log("newnew", newnew)









// if (url.charAt(4) == "." && url.charAt(-4) == ".") {
//     let search = url.slice(4)
//     let extension = url.slice(-4)
//     console.log(`File name is ${search} and extension is ${extension}`)
// }
// else {
//     console.log("Invalid URL")
// }

// if(url){
//     let newUrl = url.slice(4, -4)
//     let newUrl1 = url.slice(-4)
//     console.log()
// }else{
//     console.log("Invalid url")
// }

// let test = "test,test,best"
// let test2 = test.split("")
// console.log(test2)

// let text = "how are you?"
// let arr = text.split("")

// console.log(arr)

// if (url.includes(".")) {
//     console.log(`The url is ${url}`)
// } else {
//     console.log("Invalid URL")
// }

// if (url) {
//     let search = url.slice(4, -4)
//     let extension = url.slice(-4)
//     console.log("File name is", search, "extension is ", extension)
// } else {
//     console.log("Invalid URL")
// }

// let search = url.slice(4, -4)
// let extension = url.slice(-4)

// console.log("File name is", search, "extension is ", extension)
// console.log(search)

// if (url.includes(".")) {
//     let search = url.slice(4, -4)
//     let extension = url.slice(-4)
//     console.log("File name is", search, "extension is ", extension)
// } else {
//     console.log("Invalid URL")
// }

















