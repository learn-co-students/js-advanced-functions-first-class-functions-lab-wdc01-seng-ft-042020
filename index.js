const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2);
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (array, fn) => {
    return fn(array)
}