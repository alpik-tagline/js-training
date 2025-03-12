// *
// **
// ***
// ****
// *****
// for(let n=1;n<=5;n++){
//     let row = ""
//     for(let i=1;i<=n;i++){
//         row+="*"
//     }
//     console.log(row)
// }

// *****
// ****
// ***
// **
// *
// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 5; i >= n; i--) {
//         row += "*"
//     }
//     console.log(row)
// }

// 1
// 22
// 333
// 4444
// 55555
// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 1; i <= n; i++) {
//         row += n
//     }
//     console.log(row)
// }

// 11111
// 2222
// 333
// 44
// 5
// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 5; i >= n; i--) {
//         row += n
//     }
//     console.log(row)
// }

// 1
// 23
//7890

// function cases(n) {
//     let num = 1;
//     let output = "";
//     for (let i = 1; num <= n; i++) {
//         let row = "";
//         for (let j = 0; j < i && num <= n; j++) {
//             row += num;
//             num++;
//         }
//         output += row + "\n";
//     }
//     return output;
// }
// console.log(cases(4)); ----rework// 456

// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 1; i <= 5 - n; i++) {
//         row += " "
//     }
//     for (let j = 1; j <= n; j++) {
//         {
//             for (let k = 1; k <= 5; k++) {
//                 row += "*"

//             }
//         }
//     }
//     console.log(row)
// }

// let cases = "10"
// switch (cases) {
//     case "10":
//         {
//             let num = 1;
//             let output = "";
//             for (let i = 1; num <= 10; i++) {
//                 let row = "";
//                 for (let j = 0; j < i && num <= 10; j++) {
//                     row += num;
//                     num++;
//                 }
//                 output += row + "\n";
//             }
//             console.log(output)
//         }
//         break;
//     case "4":
//         console.log("4")
//         break;
// }

// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 1; i <= 5 - n; i++) {
//         row += " "
//     }
//     for (let j = 1; j <= n; j++) {
//         row += "*"
//     }
//     console.log(row)
// }

//  *
//  **
//  ***
//  **
//  *

// for (let n = 1; n <= 5; n++) {
//     let s = " ";
//     let prints = n <=3 ? n : 6 - n;
//     for (let j = 1; j <= prints; j++) {
//         s += "*"
//     }
//     console.log(s)
// }

// 
//     *
//    **
//   ***
//  ****
// *****
// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 1; i <= 5 - n; i++) {
//         row += " "
//     }
//     for (let j = 1; j <= n; j++) {
//         row += "*"
//     }
//     console.log(row)
// }
// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 1; i <= 5 - n; i++) {
//         row += " "
//     }
//     for (let j = 1; j <= n; j++) {
//         row += "*"
//     }
//     for (let k = 1; k <= n; k++) {
//         row += "*"
//     }
//     console.log(row)
// }

// *
// **
// ***
// ****
// *****

// let numb = Number(prompt("Enter Number"))
// for(let n=1;n<=numb;n++){
//     let row = ""
//     for(let i=1;i<=n;i++){
//         row+="*"
//     }
//     console.log(row)
// }

// *****
// ****
// ***
// **
// *

// let numb = Number(prompt("Enter Number"))
// for (let n = 1; n <=numb; n++) {
//     let row = ""
//     for (let i = 5; i >= n; i--) {
//         row += "*"
//     }
//     console.log(row)
// }

// 1
// 22
// 333
// 4444
// 55555
// let numb = Number(prompt("Enter Number"))
// for (let n = 1; n <= numb; n++) {
//     let row = ""
//     for (let i = 1; i <= n; i++) {
//         row += n
//     }
//     console.log(row)
// }

// 11111
// 2222
// 333
// 44
// 5
// let numb = Number(prompt("Enter Number"))
// for (let n = 1; n <= numb; n++) {
//     let row = ""
//     for (let i = numb; i >= n; i--) {
//         row += n
//     }
//     console.log(row)
// }

// 0
// 12
// 345
// 6789
// n=4
// function cases(n) {
//     let num = 0;
//     let output = "";
//     for (let i = 0; num <= n; i++) {
//         let row = "";
//         for (let j = 0; j < i && num <= n; j++) {
//             row += num;
//             num++;
//         }
//         output += row + "\n";
//     }
//     return output;
// }

// console.log(cases(4))

//  *
//  **
//  ***
//  **
//  *

// for (let n = 1; n <= 5; n++) {
//     let s = " ";
//     let prints = n <=3 ? n : 6 - n;
//     for (let j = 1; j <= prints; j++) {
//         s += "*"
//     }
//     console.log(s)
// }

// for (let n = 1; n <= 5; n++) {
//     let row = ""
//     for (let i = 1; i <= 5 - n; i++) {
//         row += " "
//     }
//     for (let j = 1; j <= n; j++) {
//         row += "*"
//     }
//     for (let k = 1; k <= n; k++) {
//         row += "*"
//     }
//     console.log(row)
// }

// for (let n = 5; n >= 1; n--) {
//     let row = "";
//     for (let i = 1; i <= 5 - n; i++) {
//         row += " ";
//     }
//     for (let j = 1; j <= n; j++) {
//         row += "*";
//     }
//     for (let j = 1; j <= n; j++) {
//         row += "*"
//     }
//     console.log(row);
// }

// 0
// 12
// 345
// 6789
// function cases(n) {
//     let output = "";
//     let currentNum = 0;
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += currentNum;
//             currentNum++;
//         }
//         output += row + "\n";
//     }
//     return output;
// }
// console.log(cases(9));

for (let n = 1; n <= 3; n++) {
    let row = " ";
    for (let i = 1; i <= 4 - n; i++) {
        row += " ";
    }
    for (let j = 1; j <= n; j++) {
        row += "*";
    }
    for (let k = 1; k <= n; k++) {
        row += "*";
    }
    console.log(row);
}

for (let n = 2; n >= 1; n--) {
    let row = " ";
    for (let i = 1; i <= 4 - n; i++) {
        row += " ";
    }
    for (let j = 1; j <= n; j++) {
        row += "*";
    }
    for (let k = 1; k <= n; k++) {
        row += "*";
    }
    console.log(row);
}




































