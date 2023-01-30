//1 задание
const array1 = [
  {
    username: "*",
  },
  {
    username: "**",
  },
  {
    username: "***",
  },
  {
    username: "****",
  },
  {
    username: "*****",
  },
  {
    username: "******",
  },
  {
    username: "*******",
  },
];

// console.log(array1[0].username);
// console.log(array1[1].username);
// console.log(array1[2].username);
// console.log(array1[3].username);
// console.log(array1[4].username);
// console.log(array1[5].username);
// console.log(array1[6].username);

//2 задание

// for( let j = 1; j <= 100; j++ )
// {
//     str = '';
//     if( j%3 == 0 )
//     {
//         str += 'Fizz';
//     }
//     if( j%5 == 0 )
//     {
//         str += 'Buzz';
//     }
//     console.log( str ? str : j );
// }

//3 задание (шахматная доска)

// function createChess (a, b) {
//     let value1 = "# ";
//     let value2 = " #";
//     let odd = "";
//     let even = "";
//     for (let i = 0; i < a / 2; i += 1) {
//       odd += value2;
//       even += value1;
//     }
//     for (let j = 0; j < b; j += 1) {
//       if (j % 2 != 0) {
//         console.log(odd);
//       } else {
//         console.log(even);
//       }
//     }
//   }
//   createChess(8, 8);

// 4 задание

// const users = [ "Алекс", "Анна", "Олег",];
// users.push("1,2,3")
// console.log(users);

// 5 задание

//   const users = [ "Алина", "Саша", "Алекс",];
//   console.log(users[0]);

// 6 задание

let arr1 = ["1", "true", "false", "undefined"];
arr1.shift("1");
arr1.shift("true");
arr1.unshift("Alina");
arr1.unshift("Sacha");
console.log(arr1);
