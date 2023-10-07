let btnForm = document.getElementById("btn-arrow");

let daysResult = document.getElementById("days-result")
let monthsResult = document.getElementById("months-result")
let yearsResult = document.getElementById("years-result")


/*let daysMonth = [
    {
        "01": 31,
    },
    {
        "02": 28
    },
    {
        "03": 31
    },
    {
        "04": 30
    },
    {
        "05": 31
    },
    {
        "06": 30
    },
    {
        "07": 31
    },
    {
        "08": 31
    },
    {
        "09": 30
    },
    {
        "10": 31
    },
    {
        "11": 30
    },
    {
        "12": 31
    },
]*/

let daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


btnForm.addEventListener("click", function(event){
    event.preventDefault()
})



btnForm.addEventListener("click", results);

function totalDays(){
    let daysTotal;
    for(let i = 0; i < daysMonth.length ; i++){
        if(daysMonth[i] > parseInt(month.value)){
            daysTotal = daysMonth[i] + daysTotal;
        }
    }
    console.log(daysTotal);
}

function results(){
    console.log(currentMonth);
    let dayImput = parseInt(day.value);
    let monthImput = parseInt(month.value) - 1;
    let yearImput = parseInt(year.value);
    

    if(monthImput > currentMonth){
        yearsResult.innerHTML = currentYear - yearImput - 1
    } else {
        yearsResult.innerHTML = currentYear - yearImput;
    }
    let difference;
    if(monthImput > currentMonth){
        difference = monthImput - currentMonth;
        console.log(difference);
        monthsResult.innerHTML = 12 - difference;
    } else {
        monthsResult.innerHTML = currentMonth - monthImput - 1;
    }

    for(let i = 0; i < daysMonth.length; i ++){
        daysResult.innerHTML =  currentDay + daysMonth[monthImput] - dayImput;
    
    }
    
}



