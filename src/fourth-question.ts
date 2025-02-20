function percentageEachStateTotalValue(values: number[]): number[] {
    let totalValue: number = 0;
    let percentageEachState: number[] = [];

    for (let i = 0; i < values.length; i++) {
        totalValue += values[i];
    }

    for (let i = 0; i < values.length; i++) {
        percentageEachState.push((values[i] / totalValue) * 100);
    }

    return percentageEachState;
}

const percentageEachStateTest1 = percentageEachStateTotalValue([67836.43, 36678.66, 29229.88, 27165.48, 19849.53]);
const percentageEachStateTest2 = percentageEachStateTotalValue([12345.67, 67890.12, 23456.78, 78901.23, 34567.89]);
const percentageEachStateTest3 = percentageEachStateTotalValue([54321.12, 67890.45, 23456.78, 78915.44, 62138.78]);

console.log(percentageEachStateTest1); // [ 37.53, 20.33, 16.17, 15.02, 10.98 ]
console.log(percentageEachStateTest2); // [ 5.68, 31.26, 10.80, 36.33, 15.92 ]
console.log(percentageEachStateTest3); // [ 18.94, 23.68, 8.18, 27.52, 21.67 ]