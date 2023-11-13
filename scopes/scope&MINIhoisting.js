function one() {
    const username='sagar'
    function two(){
        const websites='youtube'
        console.log(username);  
    }
    //console.log(websites);
    two();
}
//one()


//simple function
console.log(addOne(100));//if we call the function before its defination is called hoisting
function addOne(num){
    return num+1;
}

console.log(addOne(6));

//in function expression we can't do hoistiong
const addTwo = function(num) {
    return num+2;
}
console.log(addTwo(9));