/*function greet(a, b, c){
     console.log(a + b *c); 
     return(a+b*c*c*a);

}
console.log(greet(3,2,1));


function welcome(name) {
    console.log("welcome",name);

    console.log("You Are Dead");
    return("i am devil")
}

console.log(welcome("chaitanya"));

let add = (a, b) => a + b;
console.log(add(3, 2));



/*const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3, 5));*/




/*function great(a, b) {

if (a>b)
    return "first is great";
else(a<b)
    return "second is great";
} 
console.log(great(5,33));*/
/*let employee = {
    empname: "Rahul",
    department: "sales",
    details: function () { //anonymous functions
        return this.empname +
            " works with Department " +
            this.department;
    }
};
console.log(employee.details());*/

/*let studentDetails = {
    fullName:"chaitanya",
    gender:"male",
    rollno:00029,
    graduationyear:2028,
    marks: [99,84,100,92,93]
    avgmarks:
let sum=studentDetails.marks[0]+studentDetails.marks[1]+studentDetails.marks[2]+studentDetails.marks[3]+studentDetails.marks[4];
let total=studentDetails.marks.length;
let avg= sum/total;
}




const products=[
    {name:"samsung", price:10000, quantity:2},
    {name:"samsung", price:20000, quantity:2},
    {name:"samsung", price:50000, quantity:1},
]


function calculate_total_avg(pro){
let total=products[0].price *pro[0].quantity

}*/

//date-11-09
// a=4;
// if (a>2) {console.log(true)}

// num = 3
// if (num %2==0) {
//     cosnole.log("even")
// }
// else {
//     console.log("odd")
// }

// //date:18-09
// //contruction anf factory function

// //1
// function Person(first,last,age) {//construction
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greet = function() {
//         return "hello";
//     };
//   }
  
//   const person1 = new Person("raj","shekar",33)
//   console.log(person1)

//   //2
//   function createPerson(name,age) {//factory function:which return a object,do not have and dont return prototype,easy syntax and more flexible.
//     return {
//         name: name,
//         age: age
//     }
// }
// const p1 = createPerson("raj",33)

// function pstian(name,age,roll) {//new implementation,if the key name is same as the parameter we can neglet key name.
//     return {
//         name,
//         age,
//         roll
//     };
// }
// const p1 = pstian("raj",33,29)
// console.log(p1)

// //3
// function Circle(radius,color){ //constructor function-which create an new object,has prototype and return prototype,fast functions.
//     this.radius=radius;
//     this.color=color;
//     }
//     const circle1 = new Circle(3,'blue')//new keyword is used to create the instance or object of constructor function
//     circle1.diameter = 10; //add a property
//     console.log(circle1);//update a property
//     delete circle1.color;//delete a property, these three are changable and hence they are dynamic natures of object
//     console.log(circle1);
    
// //4
// function Pstian(name,age,roll) {//construction function
//     this.name= name;
//     this.age=age;
//     this.roll= roll;
//     this.intro=function() {
//         console.log(`my name is ${this.name}`)
//     }
// };
// const chaitanya = new Pstian('chaitanya',19,29)
// console.log(chaitanya)
// delete chaitanya.roll
// chaitanya.age=10000
// chaitanya.refund=100000
// console.log(chaitanya);
// chaitanya.intro()

// //date 19-09
// //1
// function midLargest(a) {
    
//     let sec;
//     let max = a[0];
//     for (let i = 0;i<=a.length;i++) {
//         if (a[i]>max) {
//             sec=max
//             max=a[i];
//             i++;
//         }
//         else if (a[i]>sec&&a[i]<max) {
//             sec=a[i]
//         }
//     }
//     return max
// }
// let arr1=[44,22,55,773,33]
// console.log(midLargest(arr1))
    
//date-26-09
//1. charAt()

//2. rest operator
// const [first,second,third,...arr] = ["vinay","bharat","aditya","abhijeet"]
// console.log(arr)

//date-01-10-24
//1
// function greet (name,callback) {
//     console.log("hi" +' '+ name);
//     callback();
// }

// function callMe() {
//     console.log("i am callback function")
// }

// greet("peter",callMe)

// //2
// function processUserInput(name,callBack) {
//     console.log("welcome" + " " + name)
//     callBack()
// }
// function confirmationMessage() {
//     console.log("u have been selected to anchor hacktoberfest")
// }
// processUserInput("akshat",confirmationMessage)

// //2
// let myPromise = new Promise(function(resolve, reject) {
//     // some code that takes time, like loading data
//     let success = true; // change this to false to check error
  
//     if (success) {
//       resolve("The data has loaded successfully!");//calls the resolve when promise is success
//     } else {
//       reject("There was an error loading the data.");//calls the reject when promise is fail
//     }
//   });

//   //doubt 
// const ages = [32, 33, 16, 40];
// const result = ages.filter((age) => {console.log(age >= 18)});
// console.log(result)

let mypromise = new Promise((resolve,reject)=>{
    let message = "text"
    let expected = "whatsapp"
    if (message.toLowerCase() === expected.toLowerCase()) {
        resolve ("yey! i got 100000 ruppeies")
    }
    else {reject ("too bad!,better luck next time")}
})
console.log(mypromise)
mypromise.then(function(message) [

])