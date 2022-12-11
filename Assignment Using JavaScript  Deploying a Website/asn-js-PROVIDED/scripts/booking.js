/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyRate = 0;
var numOfDays = 0;
var costPerDay = 0;
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
let totalCost = document.getElementById("calculated-cost");
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");
var clearButton = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickedMonday(){
    if (monday.classList.contains("clicked")) return;
    monday.classList.add("clicked");
    numOfDays += 1;
    recalculate();
}


function clickedTuesday(){
    if (tuesday.classList.contains("clicked")) return;
    tuesday.classList.add("clicked");
    numOfDays += 1;
    recalculate();
}


function clickedWednesday(){
    if (wednesday.classList.contains("clicked")) return;
    wednesday.classList.add("clicked");
    numOfDays += 1;
    recalculate();
}


function clickedThursday(){
    if (thursday.classList.contains("clicked")) return;
    thursday.classList.add("clicked");
    numOfDays += 1;
    recalculate();
}


function clickedFriday(){
    if (friday.classList.contains("clicked")) return;
    friday.classList.add("clicked");
    numOfDays += 1;
    recalculate();
}
       
monday.addEventListener("click", clickedMonday);
tuesday.addEventListener("click", clickedTuesday);
wednesday.addEventListener("click", clickedWednesday);
thursday.addEventListener("click", clickedThursday);
friday.addEventListener("click", clickedFriday);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays(){
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    numOfDays = 0;
    costPerDay = 0;
    recalculate();
}

clearButton.addEventListener("click", clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function clickedHalf(){
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    
    recalculate();
}

halfDay.addEventListener("click", clickedHalf);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function clickedFull(){
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");

    recalculate();
}

fullDay.addEventListener("click", clickedFull);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    costPerDay = parseFloat(numOfDays*dailyRate);
    totalCost.innerHTML= costPerDay;
}
