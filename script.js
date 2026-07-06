// console.log("ADVANCE-JS-COMPLETE-2");



//=====================================
// 1. VALUES AND VARIABLE IN JAVASCRIPT
//=====================================



// Only letters, numbers, underscores, and dollar signs are allowed.


// var my_firstName = "John";              //valid
// var _myLastName$ = "Doe";               //valid
// var 123myAge = 25;                      //not valid
// var $cityName = "New York";             //valid
// var my@Email = "john@example.com";      //not valid




//==================================================================================================================================================================================================




//=================
// 2. DATA TYPES
//=================





// PRIMITIVE DATA TYPES

// let a = 10;                      //number
// let b = "Atruba"                   //string
// let c = true;                     //boolean
// let d;                              //undefined
// let e = null;                     //null, types of object
// let f = 123456790127890n;          //BigInt
// let g = Symbol("qweerty");         //symbol



// console.log(a, typeof (a));
// console.log(b, typeof (b));
// console.log(c, typeof (c));
// console.log(d, typeof (d));
// console.log(e, typeof (e));
// console.log(f, typeof (f));
// console.log(g, typeof (g));


// ---------------------------------------------------------------

// PRACTICE


//  Convert a string to a number?

// var myFavNum = "10";
// console.log(typeof +myFavNum);
// console.log(typeof Number(myFavNum));


// ---------------------------------------------------------------


// Convert a number to a string?

// var str = 5;
// console.log(typeof String(str));


// ---------------------------------------------------------------


// Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓
//* In JavaScript, values are either considered "truthy" or "falsy" when evaluated in a boolean context.



//? Truthy values are treated as true when used in conditions. Examples include:

// 👉 true
// 👉 Any non-empty string ("hello")
// 👉 Any non-zero number (42)
// 👉 Arrays and objects, even if they're not empty

// Falsy values are treated as false in boolean contexts. Examples include:

// 👉 false
// 👉 0 (zero)
// 👉 '' (an empty string)
// 👉 null
// 👉 undefined
// 👉 NaN (Not a Number)





// if ("hello") {
//     console.log("True✅");

// } else {
//     console.log("False");

// }




// if ("") {
//     console.log("True");

// } else {
//     console.log("False✅");

// }


// ---------------------------------------------------------------

//* ========== parseInt & parseFloat Section ==========

// parseInt

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// parseFloat

// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5



// // ! Here are more examples
// console.log(parseInt("123"));
// // 123 (default base-10)
// console.log(parseInt("123", 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));
// // 123 (whitespace is ignored)
// console.log(parseInt("077"));
// console.log(parseFloat("077"));
// // 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// +console.log(parseFloat("1.9"));
// // 1 (decimal part is truncated)
// console.log(parseInt("-123"));



// // ! When we will not get an Output
// console.log(parseInt("&123"));
// console.log(parseInt("xyz"));
// // NaN (input can't be converted to an integer)


// ---------------------------------------------------------------


//? What is the purpose of the NaN value in JavaScript❓
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function.


// console.log(isNaN("Atruba"));
// console.log(parseInt("xyz"));
// console.log(parseInt("@#$"));



// //! NaN === NaN, Why is it false ❓


// if (NaN == NaN) {
//   console.log("both are equal ");
// } else {
//   console.log("not equal");
// }




//==================================================================================================================================================================================================



//================================
// 3. CONCATENATION IN JAVASCRIPT
//================================



// const str = "Hello " + "World";
// console.log(str);   // Output = Hello World


// let sum = "5" + 10;
// console.log(sum);  // Output = 510




//* ============================
//* Tricky Interview Questions
//* ============================
// console.log(10 + "20");                //1020
// console.log(9 - "5");                  //4
// console.log("Java" + "Script");        //JavaScript
// console.log(" " + " ");               //spaces print
// let sum = " " + 0;
// console.log(typeof sum);             //string
// console.log("vinod" - "thapa");      //NaN
// console.log(true + true);            //2
// console.log(true + false);          //1
// console.log(false + true);          //1
// console.log(false - true);          //-1




// only + sign can concatinate other signs like -, /,  * can recognize the number and perform the task


//==================================================================================================================================================================================================


//* ===================================
//* 4. EXPRESSIONS AND OPERATORS Section
//* ====================================


//  1. ARITHMETIC OPERATORS


// let a=10;
// let b=20;
// console.log(a+b);                //sum
// console.log(a-b);                //difference
// console.log(a*b);                //product
// console.log(a/b);                //quotient
// console.log(a%b);                //remainder
// console.log(a**b);               //power
// console.log(a++);                //increament
// console.log(a--);                //decrement


// 2. ASSIGNMENT OPERATORS

// let n = 5;
// console.log(n += 2);
// console.log(n -= 2);
// console.log(n *= 2);
// console.log(n /= 2);
// console.log(n %= 2);

// 3. COMPARISION OPERATORS

// let a = 10;
// let b = 20;
// let c = 5;
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a < b < c);    //true 1<c true
// console.log((a<b)+5);       //true 1+5



// 4. LOGICAL OPERATORS

// console.log(10 < 20 && 20 > 10); //give true when all cond true
// console.log(10 < 20 || 20 > 10); //give true even one cond true
// console.log(!(10 != 10)); //reverse the answers



// 5. STRING OPERATORS

// console.log("Hello " + "World");
// let str = "Atruba ";
// console.log(str += "Abid");
// console.log(10 + "Abid");



// 6. TERNARY OPERATORS

// let age = +prompt("Enter your age");
// let result = (age >= 18) ? "yes" : "No";
// console.log(result);

// let num1 = +prompt("Enter Value 1");
// let num2 = +prompt("Enter Value 2");
// let result = (num1 > num2) ? num1 : num2;
// console.log(result);




// 7. UNARY OPERATORS


// Unary = 1 operand
// Binary = 2 operands (jaise 5 + 3)
// Ternary = 3 operands (jaise condition ? value1 : value2)


//? Unary Plus (+): Converts its operand into a number. If the operand is not already a number, it attempts to convert it.

// let a = "10";
// console.log(+a);    // 10

// console.log(+3);
// console.log(+"5");


//? Unary Negation (-): Negates its operand, converting non-numbers into numbers and then negating them.


// let a = 10;
// console.log(-a);       // -10

// console.log(-5);
// console.log(-"3");



//? Prefix Increment (++x) and Prefix Decrement (--x): In prefix form, the value of the operand is first incremented or decremented, and then the result is returned.




// var x = 5;
// var y = --x;
// console.log(y);
// console.log(x);


// var x = 5;
// var y = ++x;
// console.log(y);
// console.log(x);


//? Postfix Increment (x++) and Postfix Decrement (x--): In postfix form, the value of the operand is first returned, and then it is incremented or decremented.


// var x = 5;
// var y = x++;
// console.log(y);
// console.log(x);


// var x = 5;
// var y = x--;
// console.log(y);
// console.log(x++);



//* ===================================
//*  Combined Interview Questions
//* ====================================

// console.log(typeof ("5" - 3));       //number

// console.log(2 < 12 < 5);             //true

// console.log("20" + 10 + 10);            //201010




//==================================================================================================================================================================================================


//* ===============================
//* 5. Conditional statement Section
//* ===============================













































