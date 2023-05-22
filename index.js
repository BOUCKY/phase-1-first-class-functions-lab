// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0,2);
}

const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
    return function(int){
        return multiplier * int;
    };
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}