// returnFirstTwoDrivers()
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers()
const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()
function createFareMultiplier(multiplier) {
  return (fare) => {
    return fare * multiplier;
  };
}

// fareDoubler()
const fareDoubler = createFareMultiplier(2);

// fareTripler()
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers()
function selectDifferentDrivers(drivers, selectDriversFunction) {
  return selectDriversFunction(drivers);
}
