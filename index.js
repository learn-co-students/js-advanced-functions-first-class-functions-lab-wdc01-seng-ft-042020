// Code your solution in this file!
const returnFirstTwoDrivers = function(ary) {return [ary[0], ary[1]]}
const returnLastTwoDrivers = ( (ary => [ary[ary.length - 2], ary[ary.length -1]]) )

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function selectDifferentDrivers(ary, fn) {
    return fn(ary)
}




function createFareMultiplier(mult) {
    return ( f => (mult * f))
}

let fareTripler = createFareMultiplier(3)
let fareDoubler = createFareMultiplier(2)
