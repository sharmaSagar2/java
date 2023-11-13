//const tinderUser = new Object();//singleton object

const tinderUser = {

}
tinderUser.id = "1233@abc";
tinderUser.name = "sammy";
//console.log(tinderUser);

const regularUser = {
    email : 'abc@gmail.com',
    fullname: {
        userfullname:{
            firstname:'sagar',
            lastname:'sharma'
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname);//?if else similar

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'a',4:'b'};

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

//const obj3 = {...obj1,...obj2};
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// console.log(Object.keys(tinderUser));//[ 'id', 'name' ]
// console.log(Object.values(tinderUser));//[ '1233@abc', 'sammy' ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//false
// console.log(tinderUser.hasOwnProperty('name'));//true


const course = {
    name:'js',
    price:'999',
    teacher:'hitesh'
}

const {teacher:t} = course ;
 console.log(t);

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

//JSON fetching api
// {
//     'name':'sagar',
//     'coursename':'js',
// }

//array for fetching api
[
    {},
    {},
    {},
]