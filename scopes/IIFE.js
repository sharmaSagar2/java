//global scope k declaration h uske pollution ko hatne k liya iife use kiya

//name iife
(function one(){
    console.log(`db connected`);
})();

//unmaed iife
( (name) => {
    console.log(`${name}`)
})('sagar')