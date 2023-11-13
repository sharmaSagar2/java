var c = 300;
if(true) {
    let a = 10;
    const b = 90;
    var c = 30;
    console.log("inner a :" ,a);
}
//console.log(a);not availabe as they have block scope
//console.log(b);not avilable as they have block scope
console.log(c)//30 as it  has global scope