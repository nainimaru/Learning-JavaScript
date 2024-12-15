// Immediately Invoked Function Expression (IIFE)
//global scope ka pollution(due to diff variables and stuff) hatane ke liye we use iife


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')