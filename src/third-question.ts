import data from "./third-question_data.json" with { type: "json" };

interface DailyBilling {
  highestValue: number;
  lowestValue: number;
  daysAboveAverage: number;
}

function calculateHighestValue(values: number[]): number {
  let highestValue: number = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] > highestValue) {
      highestValue = values[i];
    }
  }

  return highestValue;
}

function calculateLowestValue(values: number[]): number {
  let lowestValue: number = values[0];

  for (let i = 1; i < values.length; i++) {
    if (values[i] < lowestValue) {
      lowestValue = values[i];
    }
  }

  return lowestValue;
}

function calculateAboveAvarege(values: number[]): number {
  let sum: number = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] <= 0) {
      continue;
    }

    sum += values[i];
  }

  let average: number = sum / values.length;

  let count: number = 0;

  for (let i = 0; i < values.length; i++) {
    if (values[i] > average) {
      count++;
    }
  }

  return count;
}

function calculateDailyBilling(values: number[]): DailyBilling {
  return {
    highestValue: calculateHighestValue(values),
    lowestValue: calculateLowestValue(values),
    daysAboveAverage: calculateAboveAvarege(values),
  };
}

const dailyBillingTest1 = calculateDailyBilling(data);
const dailyBillingTest2 = calculateDailyBilling([
  120.5, 85.3, 0.0, 0.0, 150.75, 200.1, 0.0, 0.0, 175.25, 90.6, 0.0, 0.0, 130.4,
  110.2, 0.0, 0.0, 160.8, 140.9, 0.0, 0.0, 180.7, 95.5, 0.0, 0.0, 170.3, 100.1,
  0.0, 0.0, 190.4, 105.2,
]);
const dailyBillingTest3 = calculateDailyBilling([
  100, 200, 50, 60, 20, 42, 28, 130, 90, 80, 90, 90, 80, 75, 66, 54, 46, 3, 202,
  170,
]);

console.log(dailyBillingTest1); // { highestValue: 2400, lowestValue: 1100, daysAboveAverage: 6 }
console.log(dailyBillingTest2); // { highestValue: 200.1, lowestValue: 0, daysAboveAverage: 16 }
console.log(dailyBillingTest3); // { highestValue: 202, lowestValue: 3, daysAboveAverage: 8 }
