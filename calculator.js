let btnForm = document.querySelector("input[id='btn-arrow']");
let btn = document.querySelector("div[class='div-btn']");
let btnReset = document.querySelector("div[class='div-btn-reset']");

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

btnForm.addEventListener("click", switchBtn);

btnForm.disabled = true;

function switchBtn(){
    if(btn.style.display === "none" && btnReset.style.display === "flex"){
        btn.style.display = "none";
        btnReset.style.display = "flex";
    } else if(btn.style.display === "flex" && btnReset.style.display === "none"){
        btn.style.display = "none";
        btnReset.style.display = "flex";
    }
}

function enabledBtn(){
    if(dayEnabled === true && monthEnabled === true && yearEnabled === true){
        btnForm.disabled = false;
    }
}


function results(){
    dayInput = parseInt(day.value);
    monthInput = parseInt(month.value) -1;
    yearInput = parseInt(year.value);
    let monthsDifference = monthInput - currentMonth;
    let daysDifference = currentDay + daysMonth[currentMonth] - dayInput;

    if(monthInput < currentMonth){
        yearsResult.innerHTML = currentYear - yearInput;
        if(dayInput > currentDay){
            monthsResult.innerHTML = currentMonth - monthInput;
            daysResult.innerHTML = daysDifference;
        }else if(dayInput === currentDay){
            monthsResult.innerHTML = 1;
            daysResult.innerHTML = 0;
        }else if(dayInput < currentDay){
            if(daysDifference > daysMonth[currentMonth]){
                monthsResult.innerHTML = currentMonth - monthInput;
                daysResult.innerHTML = daysDifference - daysMonth[currentMonth];
            }
        }
    }else if(monthInput === currentMonth){
        if(dayInput < currentDay){
            yearsResult.innerHTML = currentYear - yearInput;
            monthsResult.innerHTML = 0;
            if(daysDifference > daysMonth[currentMonth]){
                daysResult.innerHTML = daysDifference - daysMonth[currentMonth];
            }else if(daysDifference = daysMonth[currentMonth]){
                daysResult.innerHTML = daysDifference - 1;
            }else if(daysDifference < daysMonth[currentMonth]){
                daysResult.innerHTML = daysMonth[currentMonth] - daysDifference;
            }
        }else if(dayInput === currentDay){
            yearsResult.innerHTML = currentYear - yearInput;
            monthsResult.innerHTML = 0;
            daysResult.innerHTML = 0;
        }else if(dayInput > currentDay){
            yearsResult.innerHTML = currentYear - yearInput - 1;
            monthsResult.innerHTML = 11;
            daysResult.innerHTML = daysDifference;
        }

    }else if(monthInput > currentMonth){
        yearsResult.innerHTML = currentYear - yearInput - 1;
        if(dayInput < currentDay){
            if(daysDifference > daysMonth[currentMonth]){
                monthsResult.innerHTML = 12 - monthsDifference;
                console.log(daysDifference);
                console.log(daysMonth[currentMonth]);
                daysResult.innerHTML = daysDifference - daysMonth[currentMonth];
            }else if(daysDifference === daysMonth[currentMonth]){
                monthsResult.innerHTML = 12 - monthsDifference;
                daysResult.innerHTML = daysMonth[currentMonth];
            }
        }else if(dayInput === currentDay){
            monthsResult.innerHTML = 12 - monthsDifference;
            daysResult.innerHTML = 0;
        }else if(dayInput > currentDay){
            monthsResult.innerHTML = 12 - monthsDifference - 1;
            daysResult.innerHTML = daysDifference;
        }

    }
}



