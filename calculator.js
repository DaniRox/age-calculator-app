let btnForm = document.getElementById("btn-arrow");

let daysResult = document.getElementById("days-result")
let monthsResult = document.getElementById("months-result")
let yearsResult = document.getElementById("years-result")


let dayInput;
let monthInput;
let yearInput;


const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


btnForm.addEventListener("click", function(event){
    event.preventDefault()
})

btnForm.addEventListener("click", enabledBtn);

btnForm.addEventListener("click", results);

function enabledBtn(){
    if(dayEnabled === true && monthEnabled === true && yearEnabled === true){
        btnForm.disabled = false;
    } 
    if(!dayInput === true && !monthInput === true && !yearInput === true){
        btnForm.disabled = false;
    } 
}

function totalDays(){
    let daysTotal;
    monthInput = parseInt(month.value) - 1;
    for(let i = 0; i < daysMonth.length ; i++){
        if(daysMonth[monthInput] > daysMonth[monthInput]){
            daysTotal = daysMonth[i] + daysTotal;
        }
    }
}

function results(){
    console.log(currentMonth);
    dayInput = parseInt(day.value);
    monthInput = parseInt(month.value);
    yearInput = parseInt(year.value);

    if(monthInput > currentMonth){
        yearsResult.innerHTML = currentYear - yearInput - 1
    } else {
        yearsResult.innerHTML = currentYear - yearInput;
    }
    
    let difference;
    if(monthInput > currentMonth){
        difference = monthInput - currentMonth;
        console.log(difference);
        let result = 12 - difference;
        console.log(result);
        monthsResult.innerHTML = result;
        console.log(12 - difference);
    } if(monthInput === currentMonth){
        monthsResult.innerHTML = "0";
    } else if(monthInput < currentMonth){
        monthsResult.innerHTML = currentMonth - monthInput;
    }

    for(let i = 0; i < daysMonth.length; i ++){
        daysResult.innerHTML =  currentDay + daysMonth[monthInput - 1] - dayInput;
    
    }
    
}



