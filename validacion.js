let date = new Date;

let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1; 
let currentDay = date.getDay() + 1;

let labels = document.querySelectorAll("#label");
let imputs = document.querySelectorAll(".imput");
let spans = document.querySelectorAll("#span");

let labelDay = document.querySelector(".label-day");
let labelMonth = document.querySelector(".label-month");
let labelYear = document.querySelector(".label-year");

let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let spanErrorDay = document.querySelector(".span-error-day");
let spanErrorMonth = document.querySelector(".span-error-month");
let spanErrorYear = document.querySelector(".span-error-year");



// function theYear(){
//     return currentYear;
// }

// day.addEventListener("blur", function (e){
//     const dayValid = e.currentTarget.value;
//     if(dayValid > 0 && dayValid < 32) {
//         valid()
//     }
//     if(dayValid.length === 0) {
//         spanErrorDay.innerHTML = "This field is required";
//         labelDay.style.color = "hsl(0, 100%, 67%)";
//         day.style.outline = "1px solid hsl(0, 100%, 67%)";
//     }

//     if(dayValid > 31) {
//         spanErrorDay.innerHTML = "Must be a valid day";
//         error();
//     }
// })

// month.addEventListener("blur", function (e){
//     const monthValid = e.currentTarget.value;
//     if(monthValid > 0 && monthValid < 13) {
//         valid()
//     }
//     if(monthValid.length === 0) {
//          spanErrorMonth.innerHTML = "This field is required";
//          labelMonth.style.color = "hsl(0, 100%, 67%)";
//          month.style.outline = "1px solid hsl(0, 100%, 67%)";
//     }

//     if(monthValid > 12) {
//         spanErrorMonth.innerHTML = "Must be a valid month";
//         error();
//     }
// })

// year.addEventListener("blur", function (e){
//     const yearValid = e.currentTarget.value;
//     if(yearValid <= currentYear) {
//         valid()
//     }
//     if(yearValid.length === 0) {
//          spanErrorYear.innerHTML = "This field is required";
//          labelYear.style.color = "hsl(0, 100%, 67%)";
//          year.style.outline = "1px solid hsl(0, 100%, 67%)";
//     }

//     if(yearValid > currentYear) {
//         spanErrorYear.innerHTML = "Must be a valid year";
//         error();
//     }
// })

// function valid(){
//     var i;
//     for (i = 0; i < labels.length; i ++){
//         labels[i].style.color = "hsl(0, 0%, 8%)";
//     }
//     var j;
//     for (j = 0; j < imputs.length; j ++){
//         imputs[j].style.outline = "1px solid hsl(0, 0%, 86%)";
//     }
//     var h;
//     for (h = 0; h < spans.length; h ++){
//         spans[h].innerHTML = "";
//     }
// }

// function error(){
//     var i;
//     for (i = 0; i < labels.length; i ++){
//         labels[i].style.color = "hsl(0, 100%, 67%)";
//     }
//     var j;
//     for (j = 0; j < imputs.length; j ++){
//         imputs[j].style.outline = "1px solid hsl(0, 100%, 67%)";
//     }
    
// }