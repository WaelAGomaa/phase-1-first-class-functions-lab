const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(array) {return array.slice(0,2)};

const returnLastTwoDrivers =function(array) {return array.slice(-2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function creatFareMultiplier (fare) {
 let multiplier = fare;
     return function(fare) {
     return multiplier*fare;
    }
}
function fareDoubler(fare){
    return fare*2;

}
function fareTripler(fare){
    return fare*3;
    
}

function selectDiffrentDrivers(array,select) {
    if (select === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array); 
    } else if (select === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array);
    }
}
