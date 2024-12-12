//array
//PART 1

const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes= ["shaktiman", "naagraj"]

const myArr2= new Array(1,2,3,4)
//console.log(myArr[1]);

// array methods

//myArr.push(6)
//myArr.pop()

//myArr.unshift(9)    //adds 9 in the beginning
//myArr.shift()   //removes first element

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr= myArr.join()    //convert to string

//console.log(myArr);
//console.log(typeof newArr);

//slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //will show arr including index 1 and 2 only

//console.log(myn1);
//console.log("B ", myArr);  //array remains saim as original


const myn2 = myArr.splice(1, 3)   //will show arr with element of index 3 as well
//console.log("C ", myArr);  //elements spliced will be removed
//console.log(myn2);  


//PART 2

const marvel_heros= ["thor", "Ironman", "Spiderman"]
const dc_heroes= ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("naini"))
console.log(Array.from("naini"))
console.log(Array.from({name: "naini"})) //returns empty array, need to mention keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));