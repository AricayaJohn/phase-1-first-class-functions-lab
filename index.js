// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}
// console.log(returnFirstTwoDrivers(drivers))

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}
//console.log(returnLastTwoDrivers(myDrivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function (value) {
        return value * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}