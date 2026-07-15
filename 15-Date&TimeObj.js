//* =========================================
//* Date & Time Objects in JavaScript
//* =========================================

//* ==================================================
//* JavaScript Get Date&Time Methods / Getting Components:
//* ===================================================


// let date = new Date();
// console.log(date);
// 1. DATE
// console.log(date.getFullYear());             //2026
// console.log(date.getMonth());               //5
// console.log(date.getDate());                //22
// console.log(date.getDay());                 //1
// 2. TIME
// console.log(date.getHours());               //10
// console.log(date.getMinutes());             //50
// console.log(date.getSeconds());             //49
// console.log(date.getMilliseconds());           //584

// 3.
// console.log(date.toLocaleDateString());    // 6/22/2026
// console.log(date.toLocaleTimeString());   // 10:51:45




//* ==================================================
//* JavaScript Set Date Methods / Setting Components:
//* ===================================================


// let date = new Date();
// console.log(date);
// // 1. DATE
// console.log(date.setFullYear(2025));
// console.log(date);
// console.log(date.setMonth(5));
// console.log(date);
// console.log(date.setDate(11));
// console.log(date);
// // 2. TIME
// console.log(date.setHours(10));
// console.log(date);
// console.log(date.setMinutes(9));
// console.log(date);
// console.log(date.setSeconds(44));
// console.log(date);
// console.log(date.setMilliseconds(200));  
// console.log(date);





//* ==================================================
//* 9 WAYS TO MAKE A DATE
//* ===================================================

// // 1 => Current date aur current time.
// let d = new Date();
// console.log(d);

// // 2 => Specific date.
// let d2 = new Date("2023-01-10");
// console.log(d2);

// // 3 => String ke through date.
// let d3 = new Date("July 15, 2026");
// console.log(d3);

// // 4 .
// let d4 = new Date(2026, 2, 15);
// console.log(d4);

// // 5 
// let d5 = new Date(2026, 6, 15, 10, 30);    //Year Month Date Hours Minutes
// console.log(d5);

// // 6
// let d6 = new Date(2026, 6, 15, 10, 30, 20);  // Second bhi add hogaya
// console.log(d6);


// // 7
// let d7 = new Date(2026, 6, 15, 10, 30, 20, 500);  // Milliseconds bhi add hogaye
// console.log(d7);

// // 8 => Ye Unix Epoch kehlata hai.
// let d8 = new Date(0);
// console.log(d8);

// // 9 => Milliseconds ke hisab se date banata hai.
// let d9 = new Date(1000000000);
// console.log(d9);





// ====================================================================================================================================================

//* ========================
//*    METHODS
//* ========================



// Date.now()  =>  convert current time into milliseconds

// let time = Date.now()            //1784124819952
// let date = new Date(time)        //Wed Jul 15 2026 07:14:03
// console.log(time);
// console.log(date);


// ---------------------------------------------------



//getTime()  =>  Ye 1 January 1970 se lekar us date aur time tak milliseconds return kerta hy.

// 1 January 1970 sy abhi tk jo milliseconds hyn
// let d = new Date();
// console.log(d.getTime());

// 1 January 1970 sy is date tk jo milliseconds hyn
// let date = new Date("July 15, 2026");
// console.log(date.getTime());



// Date.now() =>  ko Date object banane ki zarurat nahi hoti.
// getTime()  => use karne ke liye pehle new Date() se Date object banana padta hai.



// ---------------------------------------------------


// toLocaleString()  =>  Date aur Time dono readable form me.

// let date = new Date();
// console.log(date.toLocaleString());     //7/15/2026, 7:29:45 AM


// ---------------------------------------------------

// toLocaleDateString() =>  Date readable form me.

// let date = new Date();
// console.log(date.toLocaleDateString());     //7/15/2026



// ---------------------------------------------------

// toLocaleTimeString()  =>  Time readable form me.

// let date = new Date();
// console.log(date.toLocaleTimeString());  


// ---------------------------------------------------



// Date.parse()  =>  Date ko milliseconds me convert karta hai.

// console.log(Date.parse("2024-02-19"));  //1708300800000


// let date = Date.parse("2026-02-15")     //convert date to milliseconds
// console.log(new Date(date));            ////convert milliseconds to date



// ---------------------------------------------------


//! =======================
//! Interview Questions
//! =======================

// 1. Do dates ka difference nikalne ke liye

// let start = new Date("2025-01-01");
// let end = new Date("2025-01-10");

// let difference = end.getTime() - start.getTime();

// console.log(difference);

// ---------------------------------------------------


// 2. Date ke saath Next aur Previous Day

// NEXT DAY
// let d = new Date();
// d.setDate(d.getDate() + 1);
// console.log(d);

// PREVIOUS DAY
// let d = new Date();
// d.setDate(d.getDate() - 1);
// console.log(d);

// ---------------------------------------------------

// 3. Difference & Comparison

// let d1 = new Date("2026-07-15");
// let d2 = new Date("2026-07-20");
// // Date Difference
// let diff = d2 - d1;
// console.log(diff);          //432000000
// // Date Comparison
// let compare = d1 < d2;
// console.log(compare);       //true


// ---------------------------------------------------


// 4. Write a function to add a specified number of days to a given date.


// const addDaysToDate = (date, extraDay) => {
//     //   console.log(date);
//     // console.log(date.setDate(date.getDate() + extraDay));
//     //   console.log(new Date(1709769600000));
//     let updatedDate = date.setDate(date.getDate() + extraDay);
//     return new Date(updatedDate);
// };


// const date = new Date("2024-11-1");
// console.log(date.toLocaleDateString());

// const newDate = addDaysToDate(date, 7);
// console.log(newDate);
// console.log(newDate.toLocaleDateString());



// ---------------------------------------------------

// 5. Write a function to calculate the difference in days between two given dates.

// const getDaysDifference = (d1, d2) => {
//   let oneDay = 24 * 60 * 60 * 1000;
//   let diff = Math.abs(d1 - d2);
//   return Math.round(diff / oneDay);
// };

// // Example usage:
// const date1 = new Date("2024-02-19");
// const date2 = new Date("2024-03-01");
// console.log(getDaysDifference(date1, date2)); // Output: 11 (difference in days)



// COMPLETED



