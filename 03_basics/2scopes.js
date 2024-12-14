
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20                   //block scope
    // console.log("INNER: ", a);
    
}

             //global scope

// console.log(a);
// console.log(b);
// console.log(c);


//nested scope
//child function can access the parent variable but not vice versa

function one(){
    const username= "Naini"

    function two(){
        const website= "youtube"
        console.log(username);
    }
    // console.log(website);     connot be accessed

    two()

}

//one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);   will run
    }
    // console.log(website);    error
}

// console.log(username);       error


//++++++++++++ interesting +++++++++++++

console.log(addone(5))  //will run

function addone(num){
    return num + 1
}



addTwo(5)         //error if written before function declaration
const addTwo = function(num){
    return num + 2
}
