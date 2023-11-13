const user = {
    username:'sagar',
    price:999,
    welcomeMessage: function() {
        // console.log(`${this.username},welcome to website`);//this->current context
        // console.log("THIS",this);
    }
}
//console.log(user.welcomeMessage);//[Function: welcomeMessage]
user.welcomeMessage();
/*
    sagar,welcome to website
    THIS {
    username: 'sagar',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
    }
*/
user.username='hitesh';
user.welcomeMessage();
/*
    hitesh,welcome to website
    THIS {
    username: 'hitesh',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
*/
//console.log(this);//{} this refring to empty object


function chai(){
    let username = 'sagar';
    console.log(this.username);//undefined as this only refer to objects
}
//chai();

const chai1 = function(){
    let username = 'sagar';
    console.log(this.username);//undefined as this only refer to objects
    console.log(this);//large object
}
//chai1();









const one = () => {
    let username='sagar'
    console.log(this.username);//undefined
    console.log(this);//{} in arraw fxn we can't access this as we can access in normal fxn but  THIS IS NOT ACTUAL DIFFERENCE LATER WE STUDY
}
//one();

const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(5,6));
//2nd way
const addTwo1 = (num1,num2) => (num1+num2)//implicit return
console.log(addTwo1(51,6));


const retObj = (num1,num2) => ({username:'sagar'})
//console.log(retObj(4,5));//{ username: 'sagar' }






