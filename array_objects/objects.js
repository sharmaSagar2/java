 //singleton -> construtor se object bna vo 

 //object literals
const mySymbol = Symbol('key1');
 const jsUser = {
    name : 'sagar',
    age : 20,
    [mySymbol] : 'mykey1',
    'full name' : 'sagar sharma',
    location : 'dehradun',
    email : 'sagar@gmail.com',
    isLoggedIn : false,
    lastLoginDays : ['monday','saturday']
 }

 //console.log(jsUser.email);
 //console.log(jsUser['full name']);
 //console.log(typeof jsUser.mySymbol);//string if mySymbol:mykey1
 //console.log(jsUser[mySymbol]);


 jsUser.email = 'abc@gmail.com';
 //console.log(jsUser.email);//abc@gmail.com
 //Object.freeze(jsUser);
 jsUser.email = 'sharma@gmail.com';
 //console.log(jsUser.email);//abc@gmail.com



 jsUser.greeting = function() {
    console.log('hello js user');
 }
 jsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`); 
 }
 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
 


