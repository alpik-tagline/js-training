let abc = [
    {
        "name": "Alice Johnson",
        "id": "A123",
        "age": 30,
        "gender": "female"
    },
    {
        "name": "Bob Smith",
        "id": "B456",
        "age": 25,
        "gender": "male"
    },
    {
        "name": "Charlie Williams",
        "id": "C789",
        "age": 42,
        "gender": "male"
    },
    {
        "name": "Diana Brown",
        "id": "D101",
        "age": 28,
        "gender": "female"
    },
    {
        "name": "Ethan Davis",
        "id": "E112",
        "age": 35,
        "gender": "male"
    },
    {
        "name": "Fiona Miller",
        "id": "F131",
        "age": 29,
        "gender": "female"
    },
    {
        "name": "George Wilson",
        "id": "G141",
        "age": 48,
        "gender": "male"
    },
    {
        "name": "Hannah Moore",
        "id": "H151",
        "age": 31,
        "gender": "female"
    },
    {
        "name": "Ian Taylor",
        "id": "I161",
        "age": 26,
        "gender": "male"
    },
    {
        "name": "Julia Anderson",
        "id": "J171",
        "age": 33,
        "gender": "female"
    }
]

//   1. new array of all user's id and name
//   2. new array of all user's id and age
//   3. Male user array with id and name
//   4. Users more than 30 years old id and name
//   5. Female more than 30 years old id and name
//   6. Users less than 30 years name and age

// let o1 = abc.map((items,id)=>{
//     return id,items.name 

// })

// console.log(o1)

// let o2 = abc.map((items,id)=>{
//     return id,items.age
// })

// console.log(o2)

// let o3 = abc.map((items,id)=>{
//     return id,items.gender == "male"
// })

// console.log(o3)



// for (let i = 0; i < abc.length; i++) {
//     let output = [abc[i].id, abc[i].gender === "female" && abc[i].name]
//     console.log(output)
// }

// let first = []
// for (let i = 0; i < abc.length; i++) {
//     first += abc[i].id + " " + abc[i].name + "\n"
// }
// console.log(first)

// let sec = []
// for (let i = 0; i < abc.length; i++) {
//     sec += abc[i].id + " " + abc[i].age + "\n"
// }
// console.log(sec)

// let third = []
// for (let i = 0; i < abc.length; i++) {
//     third += abc[i].id + " " + abc[i].age<30 + "\n"
// }
// console.log(third)

// abc.map(({ id, name }) => (
//     console.log(`id ${id} name ${name}`)
// ))

// abc.map(({id,age})=> (
//     console.log(`id ${id} name ${age}`)
// ))


// abc.map(({id,gender,name}) =>{
//     if(gender==="male"){
//         console.log(` name ${gender}`)
//     }
// })

// let p1 = abc.map((items) => {
//     return items.id ,items.name
// })
// console.log(p1)

// let p2 = abc.map(({id,name,gender})=>{
//     return id && name && gender
// })

// console.log(p2)


// 1. print every latter in the interval of 1 second and stop after 'world' letter


// let string = 'hello world';

// for (let i = 0; i < string.length; i++) {
//     let output = string[i]
//     let interval = setInterval(output, 2000)
//     console.log(interval)
// }




// let string = "hello world"

// for (let i = 0; i < string.length; i++) {
//     let output = string[i]
//     let newot = setInterval(output, 1000)
//     console.log(newot)
// }



// 1. get year based on given date 
//    get month based on given date 
//    get day based on given date 
// 3. get timestamp based on given date,
// 4. convert it into 'DD-MM-YYYY' format
// 5. print date into 'DD/MM' format  

// let time = new Date('13:1')
// let ampm = time.toLocaleTimeString()
// console.log(ampm)

// let currentDate = new Date('13:1');
// let am_pm = currentDate.toLocaleTimeString();
// console.log(am_pm); // 12:48:20 PM


// var x = new Date('13:1')
// var y = x.toLocaleString([],{
//     hour12:true
// })

// console.log(y)

// let datee = new Date('13:1');

// let n = date.toLocaleString([], {
//       hour: "2-digit",
//       minute: "2-digit",
// });

// console.log(n);

// 1. print every latter in the interval of 1 second and stop after 'world' letter

// output:
// h 
// e
// l
// l
// o

// w
// o
// r
// l
// d

// setTimeout(print,3000)

// let string = 'hello world Bhavik';

// for (let i = 0; i < string.length; i++) {
//     let output = ""
//     output += string[i]
//     setInterval(output, 1000)
// }



// let string = 'Hello world bhavik'

// let interval = function () {
//     for (let i = 0; i < string.length; i++) {
//         setInterval(() => {
//             console.log(string[i])
//         }, 1000)
//     }
// }

// interval()

let text = 'xvvxvvvvvxxvvvvxvvvxvvvvvvv'
let res = /xv/.exec(text)
console.log(res)

// DONE PROGRAMS

// const email = 'xyz@xyz-xc.co.in';
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// if (emailRegex.test(email)) {
//     console.log("valid email");
// } else {
//     console.log("invalid email");
// }

// let date = new Date('2024-03-01')
// console.log("year", date.getFullYear())
// console.log("month", date.getMonth() + 1)
// console.log("day", date.getDay())
// console.log("timestamp", Date.parse(date))
// let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
// console.log("DD-MM-YYYY", dateMDY)
// let md = `${date.getMonth() + 1}-${date.getDate()}`
// console.log("DD/MM", md)

// for (let i = 0; i < abc.length; i++) {
//     let output = [abc[i].id, abc[i].name]
//     console.log(output)
// }

// for (let i = 0; i < abc.length; i++) {
//     let output = [abc[i].id, abc[i].age]
//     console.log(output)
// }

// for (let i = 0; i < abc.length; i++) {
//     let output = [abc[i].gender === "male" && abc[i].name,abc[i].id]
//     console.log(output)
// }

// for (let i = 0; i < abc.length; i++) {
//     let output = [abc[i].age > 30 && abc[i].name,abc[i].id, ]
//     console.log(output)
// }

// for (let i = 0; i < abc.length; i++) {
//     let output = [abc[i].gender === "female" ,abc[i].age > 30 && abc[i].name]
//     console.log(output)
// }

// for (let i = 0; i < abc.length; i++) {
//     let output = [abc[i].id, abc[i].age < 30 && abc[i].name, abc[i].age]
//     console.log(output)
// }
