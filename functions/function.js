function calculatePrice(val1,val2,...num1){
    return num1;
}
//console.log(calculatePrice(200,500,600,800,9000))//[600,800,9000]


const user = {
    username:'sagar',
    price:455,
}
function handleObject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//1st way
handleObject(user);
//2nd way
handleObject({
    username:'sharma',
    price:5
})


const newArray=[200,400,100,600];

function returnSecoundValue(getArray){
    return getArray[1];
}
//1st way
//console.log(returnSecoundValue(newArray));
//2nd way
console.log(returnSecoundValue([400,10000,40,59]))

