// alert("hello world");//used for providing a popup
// we can also create a js file inside a console in developer tools
// console.log('hello world');//we can get the following hello world in a developer tools
// console.error('this is an error');//it will show if any error is there in the console
// console.warn('this is a warning');//it will show warning in console in developer tools(yellow warning sign)


// VARIABLES IN JAVASCRIPT
// let and const can be having a block level scope

// let score;
// const score =5;//it can be assigned in itself
// score = 10; //first let will act as variable then we will provide value.
// console.log(score);

// DATATYPES IN JAVASCRIPT

// String,Numbers,Boolean,Undefined,Null and Symbol

// const name = 'harsh';//strings will hace double and single quotes
// const age = 30;//number
// const rating = 4.5 //decimal number not technical float or int
// const iscool=true;//boolean
// const x = null;//null or not an object but show object in console
// const y = undefined;//undefined datatype
// let z;//undefined datatype

// console.log(typeof rating);//it is used to display the type of datatype we are using


// CONCATENATION IN JS
// const name = 'harsh';//strings will hace double and single quotes
// const age = 30;//number

// // console.log('my name is '+name+' and i am '+age+' years old')//old Way of concatenation of elements.
// const hello ='my name is ${name} and i am ${age} years old';

// console.log(hello);

// STRING PROPERTIES AND METHODS

// const s = 'hello world!';

// console.log(s.length);//to determine the length of the string
// console.log(s.toLowerCase());//to get the lowercase of the string
// console.log(s.toUpperCase());//to get the uppercase of the string
// console.log(s.substring(0,5));//to determine the substring out of the string
// console.log(s.substring(0,5).toUpperCase());//to determine the substring out of the string in uppercase

// to split a string into an array

// console.log(s.split(''));//to split into 12 different values in array.

// const s = 'technology,computers,it,code,chocolates';
// console.log(s.split(','));//we can have an array with 4 values and this can be useful to split the string in form of arrays

//*****  ARRAYS-variables that hold multiple values *****

// const numbers = new Array(1,2,3,4,5); //here new is a constructor which create array
// console.log(numbers);
//we can also put multiple datatypes inside the array in javascript
// const fruits = ['apples','mango','guava','litchi',10,true];// in most part we can just set brackets and create our arrays
// console.log(fruits[0]);//to access any one of the elements of the array we should write fruits[1] to access the first element in an array
// console.log(fruits);//arrays are always follows 0 based indexing

// const fruits = ['apple','mango','guava'];
// // to add an element in an array
// //detect the index and put the value
// // we cannot reassign any array fruits[] like this
// fruits[3]='watermelon';//at 3rd index watermelon is added in an array
// fruits.push('bandhagobhi');// to push any value to the end
// fruits.unshift('strawberries');// to push any value in the beginning
// fruits.pop();//to remove the last one out(bandhagobhi deleted)
// console.log(Array.isArray(fruits));//to check something is in array means fruit is there so it will return true otherwise if we write any string here then it will return false
// console.log(fruits.indexOf('apple'))// to get the index of an element in an array
// console.log(fruits);

// OBJECT LITERALS

// const person = {
//     firstname: 'harsh',
//     lastname: 'sahu',
//     age: 30,
//     hobbies:['music','movies','eating'],
//     address: {
//         street:'a block',
//         city:'jamshedpur',
//         state:'jharkhand'
//     }
// }
// console.log(person);//to call the whole values
// console.log(person.firstname, person.lastname);//to call only the both first name and last name
// // to get the value movies
// console.log(person.hobbies[1]);
// // to get the value city
// console.log(person.address.city);
// // to create variables 
// const {firstname, lastname, address: {city}} = person;
// console.log(firstname);
// console.log(city);
// // to add any property
// person.email = 'harshsahu9898@gmail.com';
// console.log(person);

//  ARRAYS OF OBJECTS

// const todos =[//arrays with 3 values which all have objects
//     {
//         id: 1,
//         text:'take out trash',
//         iscompleted:true
//     },
//     {
//         id: 2,
//         text:'meeting with the boss',
//         iscompleted:true
//     },
//     {
//         id: 3,
//         text:'dentist appt',
//         iscompleted:false
//     }
// ];
// console.log(todos);
// console.log(todos[1].text);//to get the first text of first id inside the array

// // JSON -JSON is a data format which is used a lot in full stack development and using api and sending data into server using json format
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//  LOOPS IN JS

// FOR LOOP 

// for(let i =1;i<=10;i++){
//     console.log('for loop number: '+i);
// }

// for the above array with object loop should be

// for(let i =0;i<todos.length;i++){
//     console.log(todos[i].text);
// }
// WHILE LOOP

// let i =0;
// while(i<10){
//     console.log('while loop number :' +i);
//     i++;
// }

// FOR OF LOOP 

// for(let todo of todos){
//     console.log(todo.text);//to get the text we can directly call it without writing the other index format
// }

// // FOR EACH LOOP

// todos.forEach(function(todo){
//     console.log(todo.text);//it will make more easy to understandable and for looping
// });

// MAP-KINDA LOOP

// const todotext = todos.map(function(todo){
//     return todo.text;
// });

// console.log(todotext);

// FILTER - TYPE OF LOOP--filter out for returning various boolean value we specify

// const todocompleted = todos.filter(function(todo){
//     return todo.iscompleted == true;
// });

// console.log(todocompleted);

// TO USE ONLY MAP FUNCTION FOR RETURNING ONLY TEXT
// const todocompleted = todos.filter(function(todo){
//     return todo.iscompleted === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todocompleted);

// IF ELSE STATEMENTS

// const x = 10;

// if(x==10){//it will not check for datatypes and directly returns the value
//     console.log("x is 10");
// }

// const x = 10;

// if(x===10){//it will check for datatypes and not directly returns the value first it will check whether the datatypes is matching or not 
//     console.log("x is 10");
// }else if(x>10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }

// USE OF AND AND OR OPERATOR AND MULTIPLE VALUES
// const x = 11;
// const y = 19;

// if(x>10 || x>20){//it will check for datatypes and not directly returns the value first it will check whether the datatypes is matching or not 
//     console.log("x is more than 5 or is y is more than 20");
// }
// const  z = 11;
// const w = 12;
// if(z>10 && w>20){
//     console.log("x is more than 10 and y is more than 20");
// }

// USE OF TERNARY OPERATOR 

// const x = 12;

// const color = x > 10 ? 'red' :'blue';//after the question mark the red and blue is there where red stands for true and blue stands for false

// console.log(color);

// USE OF SWITCHES 

// const x = 11;

// const color = x>10 ? 'red':'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is neither red nor blue');
//         break;
// }

// FUNCTIONS  

// function addnums(num1,num2){
//     console.log(num1+num2);
// }

// addnums(2,4);

// we can also put default values to function
// function addnums(num1=1,num2=1){
//     console.log(num1+num2);
// }

// addnums();//if no value is written here then num1 and num2 is added and if there then this function will override and get the value

// to return anything inside a function
// function addnums(num1 = 1,num2 =2 ){
//     return num1+num2;
// }
// console.log(addnums(4,5));

//  to use arrow functions without using return keyword 
// const addnums = (num1 = 1,num2 =2 ) => 
//     console.log(num1+num2);
// addnums(4,5);

// const addnums = num1 => num1+ 5;

// console.log(addnums(5));