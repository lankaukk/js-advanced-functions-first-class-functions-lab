// Code your solution in this file!

const returnFirstTwoDrivers = function(array_of_drivers) {
    return array_of_drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(array_of_drivers) {
    return array_of_drivers.slice(-2);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };