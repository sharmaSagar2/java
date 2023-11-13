 const myArr = [0,1,2,3,4,5];
//  myArr.unshift(9);
//  myArr.unshift(9);
//  myArr.shift();//[ 9, 0, 1, 2,3, 4 ]

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(9))//-1

// const newArr =myArr.join();
// console.log(newArr);//type string
//  console.log(myArr);


// slice and splice

// console.log('A ',myArr);

// const myn1 = myArr.slice(1,3);
// console.log('sliced array ' ,myn1);

// console.log('original array after slice ',myArr );

// const myn2 = myArr.splice(1,3);
// console.log('spliced array',myn2);

// console.log('original array after spliced ',myArr);


//--------------------------------------------------//
const marvel_heros = ["thor",'ironman','spiderman'];
const dc_heros = ['superman','flash','batman'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] , modifies the original array

// const a = marvel_heros.concat(dc_heros);
// console.log(a);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const allHeros = [...marvel_heros,...dc_heros];
// console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const useArr = arr1.flat(Infinity);
// console.log(useArr);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// console.log(Array.isArray('sagar'));//false
// console.log(Array.from('sagar'));//[ 's', 'a', 'g', 'a', 'r' ]
// console.log(Array.from({name:'sagar'}));//[]


let score1=100;
let score2=200;
let score3=300;

//console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]








