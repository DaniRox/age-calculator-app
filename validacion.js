let date = new Date;

let currentYear = date.getFullYear();
let currentMonth = date.getMonth(); 
let currentDay = date.getDate();

let labels = document.querySelectorAll("#label");
let inputs = document.querySelectorAll(".input");
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

let dayEnabled;
let monthEnabled;
let yearEnabled;

//let spansError = [spanErrorDay, spanErrorMonth, spanErrorYear];

// const validation = (e) => {
//     //btnForm.disabled = true;
//     const inputs = e.target;
//     const inputsValue = e.target.value;

//     let inputDay = document.querySelector("#day").value;
//     let inputMonth = month.value;
//     if(inputsValue.length === 0){
//         error()
//     }
//     if(parseInt(inputDay) > daysMonth[parseInt(inputMonth)]) {
//         spanErrorDay.innerHTML = "Must be a valid day";
//         error();
//     }

// }

// day.addEventListener("blur", validation);
// month.addEventListener("blur", validation);
// year.addEventListener("blur", validation);

// for(let i = 0; i <= inputs.length; i++){
//     inputs[i].addEventListener("blur", validation);
// }


// function validation(){
//     let spansError = [spanErrorDay, spanErrorMonth, spanErrorYear];
//     for(let i = 0; i <= spansError.length; i ++){
//         if(spansError[i]){
            
//         }
//     }
//     if(inputDay === ""){
//         spanErrorDay.innerHTML = "This field is required";
//         error()
//     }
// }

day.addEventListener("blur", function (e){
    const dayValid = e.currentTarget.value;
    dayInput = parseInt(day.value);
    
    if(dayValid > 0 && dayValid < 32) {
        valid();
        dayEnabled = true;
        spanErrorDay.innerHTML = "";
    }
    if(dayValid.length === 0) {
        spanErrorDay.innerHTML = "This field is required";
        labels.forEach(labelError);
        inputs.forEach(inputError);
    }

    if(dayValid > 31) {
        spanErrorDay.innerHTML = "Must be a valid day";
        labels.forEach(labelError);
        inputs.forEach(inputError);
    }
    if(dayInput > daysMonth[parseInt(month.value) - 1]){
        labels.forEach(labelError);
        inputs.forEach(inputError);
        spanErrorDay.innerHTML = "Must be a valid date";
    } else {
        spanErrorDay.innerHTML = "";
    }
})


month.addEventListener("blur", function (e){
    const monthValid = e.currentTarget.value;
    if(monthValid > 0 && monthValid < 13) {
        valid();
        monthEnabled = true;
        spanErrorMonth.innerHTML = "";
    }
    if(monthValid.length === 0) {
         spanErrorMonth.innerHTML = "This field is required";
         labels.forEach(labelError);
         inputs.forEach(inputError);
    }

    if(monthValid > 12) {
        spanErrorMonth.innerHTML = "Must be a valid month";
        labels.forEach(labelError);
        inputs.forEach(inputError);
    }

    if(dayInput > daysMonth[parseInt(month.value) - 1]){
        labels.forEach(labelError);
        inputs.forEach(inputError);
        spanErrorDay.innerHTML = "Must be a valid date";
    }
})


year.addEventListener("blur", function (e){
    const yearValid = e.currentTarget.value;
    if(parseInt(year.value) <= currentYear) {
        valid();
        yearEnabled = true;
        spanErrorYear.innerHTML = "";
    }
    if(yearValid.length === 0) {
        spanErrorYear.innerHTML = "This field is required";
        labels.forEach(labelError);
        inputs.forEach(inputError);
        
    }

    if(yearValid > currentYear) {
        spanErrorYear.innerHTML = "Must be a valid year";
        labels.forEach(labelError);
        inputs.forEach(inputError);
    }
})


function valid(){
    labels.forEach(labelValid);
    inputs.forEach(inputValid);
}

function labelValid(e){
    e.style.color = "hsl(0, 1%, 44%)";
}

function inputValid(e){
    e.style.outline = "1px solid hsl(0, 0%, 86%)";
}

function labelError(e){
    e.style.color = "hsl(0, 100%, 67%)";
}

function inputError(e){
    e.style.outline = "1px solid hsl(0, 100%, 67%)";
}