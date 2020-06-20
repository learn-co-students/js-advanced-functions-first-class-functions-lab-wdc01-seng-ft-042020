// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return new Array(drivers[0] , drivers[1])
}

const returnLastTwoDrivers = function(drivers) {
    return new Array(drivers[drivers.length-2], drivers[drivers.length-1])
}

let selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers, returnLastTwoDrivers)

function createFareMultiplier(int){ 
    return function(fare) {
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}
