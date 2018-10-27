console.log("Hello world!");
console.log("Hallo wereld!");
console.log("Mar7aba Ea Bashar!");

/*------2------*/

console.log('I\'m awesome');
console.log("I'm awesome");

/*-------3-----*/
let x
console.log("the value of my variable x will be undefined");
console.log(x);
x = 100
console.log("the value of my variable x will be 100");
console.log(x);

/*----------4----------*/
let y = 'Hello';
console.log('The Value of y will be Hello');
console.log(y);
 y = 'Hello Class 18';
console.log('The Value of y will be Hello Class 18');
console.log(y);

/*---------5---------*/
const z = 7.25;
console.log(z);

const a = Math.round(z);
console.log(a);
const u = ('The Highest Value is:' + Math.max( z , a));
console.log(u);


/*--------6---------*/

const zoo = [''];
console.log ('There is No Value for zoo');
console.log(zoo[0]);

const myFavoriteAnimals = ['Penguin','Giraffe','tiger'];
console.log(myFavoriteAnimals [0]);
console.log(myFavoriteAnimals [1]);
console.log(myFavoriteAnimals [2]);

/*-------7-------*/

let myString = "this is a test";
console.log(myString.length);

/*------8------*/


let c = 1;
let d = 'Hello world';
let e = true;
let f = ['Hack Your Future'];

console.log('The Value of my variable c is : ' + c);
console.log('The type  of my variable c is : ' + typeof c);

console.log('The Value of my variable d is : ' + d);
console.log('The type  of my variable d is : ' + typeof d);

console.log('The Value of my variable e is : ' + e);
console.log('The type  of my variable e is : ' + typeof e);

console.log('The Value of my variable f is : ' + f);
console.log('The type  of my variable f is : ' + typeof f);

if (c===d){
	console.log( 'The variables c and d have the same value: '  + typeof c + typeof d )
} else {
	console.log( 'The variables c and d have a different value: '  + typeof c + typeof d  )
}

if (d===e){
	console.log( 'The variables d and e have the same value: '  + typeof d + typeof e )
} else {
	console.log( 'The variables d and e have a different value: '  + typeof d + typeof e  )
}


if (e===f){
	console.log( 'The variables e and f have the same value: '  + typeof e + typeof f )
} else {
	console.log( 'The variables e and f have a different value: '  + typeof e + typeof f  )
}


if (e===e){
	console.log( 'The variables e and e have the same value: '  + typeof e + typeof e )
} else {
	console.log( 'The variables e and e have a different value: '  + typeof e + typeof e  )
}


if (f===f){
	console.log( 'The variables f and f have the same value: '  + typeof f + typeof f )
} else {
	console.log( 'The variables f and f have a different value: '  + typeof f + typeof f  )
}

/*-----------9---------*/
let xx = 7;
xx = xx % 3;
console.log("The value of my variable is : " + xx );
/* 7/3=2
   2*3=6
   7-6=1 */

let q = 45;
q = q % 8;
console.log("The value of my variable is : " + q );
/* 45/8=5
   5*8=40
   45-40=5 */

let s = 75;
s = s % 6;
console.log("The value of my variable is : " + s );
/* 75/6=12
   12*6=72
   75-72=3 */

let v = 85;
v = v % 11;
console.log("The value of my variable is : " + v );
/* 85/11=7
   7*11=77
   85-77=8 */

 /*---------10--------*/


let myList =[ 28 , "pen" ];
console.log(myList);
console.log('Yes I can store multiple types in one array : ' + typeof myList [0]);
console.log('Yes I can store multiple types in one array : ' + typeof myList [1]);


let y = 6/0
let z = 10/0

if (y===z) {
  console.log('true Y and Z have the Same Value')
} else {
  console.log('false Y and Z have a different Value')
}
