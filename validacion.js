let date = new Date;

let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1; 
let currentDay = date.getDate();

let labels = document.querySelectorAll("#label");
let inputs = document.querySelectorAll("input[name='day'], input[name='month'], input[name='year']");
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



day.addEventListener("blur", function (e){
    const dayValid = e.currentTarget.value;
    dayInput = parseInt(day.value);
    
    if(dayValid > 0 && dayValid < 32) {
        valid();
        dayEnabled = true;
        spanErrorDay.innerHTML = "";
        btnForm.disabled = false;
    }

    if(dayValid.length === 0) {
        spanErrorDay.innerHTML = "This field is required";
        labels.forEach(labelError);
        inputs.forEach(inputError);
        btnForm.disabled = true;
    }

    if(dayValid > 31) {
        spanErrorDay.innerHTML = "Must be a valid day";
        labels.forEach(labelError);
        inputs.forEach(inputError);
        btnForm.disabled = true;
    }
    if(dayInput > daysMonth[parseInt(month.value) - 1]){
        labels.forEach(labelError);
        inputs.forEach(inputError);
        spanErrorDay.innerHTML = "Must be a valid date";
        btnForm.disabled = true;
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
        btnForm.disabled = false;
    }
    if(monthValid.length === 0) {
         spanErrorMonth.innerHTML = "This field is required";
         labels.forEach(labelError);
         inputs.forEach(inputError);
         btnForm.disabled = true;
    }

    if(monthValid > 12) {
        spanErrorMonth.innerHTML = "Must be a valid month";
        labels.forEach(labelError);
        inputs.forEach(inputError);
        btnForm.disabled = true;
    }

    if(dayInput > daysMonth[parseInt(month.value) - 1]){
        labels.forEach(labelError);
        inputs.forEach(inputError);
        spanErrorDay.innerHTML = "Must be a valid date";
        btnForm.disabled = true;
    }
})


year.addEventListener("blur", function (e){
    const yearValid = e.currentTarget.value;
    if(parseInt(year.value) <= currentYear) {
        valid();
        yearEnabled = true;
        spanErrorYear.innerHTML = "";
        btnForm.disabled = false;
    }
    if(yearValid.length === 0) {
        spanErrorYear.innerHTML = "This field is required";
        labels.forEach(labelError);
        inputs.forEach(inputError);
        btnForm.disabled = true;
    }

    if(yearValid > currentYear) {
        spanErrorYear.innerHTML = "Must be a valid year";
        labels.forEach(labelError);
        inputs.forEach(inputError);
        btnForm.disabled = true;
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