let btnForm = document.querySelector(".btn-arrow");

// console.log(currentYear);

let resultYear = document.getElementById("years-result");


function results(){
    const theyear = resultYear - currentYear;
    resultYear.innerHTML = ${theyear};
    console.log(resultYear);
}

// switch(fecha){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         days = 31;
//         break;
//     case 2:
//         days = 28;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         days = 30;
//         break;
// }