let btnForm = document.getElementById("btn-arrow");

let daysResult = document.getElementById("days-result")
let monthsResult = document.getElementById("months-result")
let yearsResult = document.getElementById("years-result")


btnForm.addEventListener("click", function(event){
    event.preventDefault()
})



btnForm.addEventListener("click", results);


function results(){
    console.log(currentMonth);
    let dayImput = parseInt(day.value);
    let monthImput = parseInt(month.value);
    let yearImput = parseInt(year.value);
    daysResult.innerHTML = currentDay;
    monthsResult.innerHTML = currentMonth - monthImput;
    yearsResult.innerHTML = currentYear - yearImput;

}


