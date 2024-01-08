// print command
console.log("Hi hello")

// var is type of declaring a variable and it has a global scope
var a=10;
console.log(a)
{
    var a=90;
    console.log(a)
}
console.log(a)

// let -- has block scope -- no redeclaration in the same block
let b=24;
console.log(b);
{
    let b=5;
    console.log(b) //5
}
console.log(b)//24
b=4;
console.log(b)  //4

// typeof -- to check type of variable
console.log(typeof(b));

// undefined
var t;
console.log(typeof(t));


// js objects
let person = {
    name:"farsana",
    age:25,
    place:"EKM"
}
// to access a value from obj
console.log(person.place)

// creating an object using new keyword

let car=new Object();
car.brand="Honda";
car.model="amaze";
car.color ="white";
console.log(car);

let per1={
    details:{
        FirstName:"farsana",LastName:"Yuseph"
    },
    address:{
        place:"thampanoor", city:"tvm",state:"kerala"
    }
}
console.log(per1.details);

var arr_obj =[{name:"sabu",location:"ekm"},{name:"fars",location:"tvm"}]
// to access the location of the 2nd element of the array
console.log(arr_obj[1].location);

// functions
function addval(ad1,ad2){
    var sum=ad1+ad2;
    return sum;
}

function subval(sb1,sb2){
    var sub=sb1-sb2;
    return sub;
}

function mval(m1,m2){
    var mul=m1*m2;
    return mul;
}

function dival(d1,d2){
    var div=d1/d2;
    return div;
}

var sum_result = addval(10,20);
var sub_result = subval(10,20);
var mul_result = mval(10,20);
var div_result = dival(10,20);
console.log("The calculated sum is " +sum_result);
