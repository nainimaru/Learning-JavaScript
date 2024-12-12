//PART 1

//singleton  -constructor se banega toh object humesha singleton banega
//Object.create  -constructor method

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Naini",
    "full name": "Naini Maru",
    [mySym]: "mykey1",    //need to put in square brackets for symbols
    age: 20,
    location: "Indore",
    email: "nainimaru@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email= "naini@google.com"

//Object.freeze(JsUser)   //to lock the info and not be allowed to make changes

JsUser.email= "maru@google.com"
//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());