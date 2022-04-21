const {
  getRewardForTransaction,
  getRewardsByCustomer,
} = require("./rewardcalculator");

test("getRewardForTransaction calculates properly", () => {
  const testData = [
    { input: 45, result: 0 },
    { input: 50, result: 0 },
    { input: 52, result: 2 },
    { input: 70, result: 20 },
    { input: 100, result: 50 },
    { input: 120, result: 90 },
    { input: 170, result: 190 },
  ];
  testData.forEach((data) =>
    expect(getRewardForTransaction(data.input)).toBe(data.result)
  );
});

test("getRewardsByCustomer works properly", () => {
  const testData = [
    { custId: 234, transDate: "19-Apr-2021", transactionValue: 124 },
  ];
  const result = getRewardsByCustomer(testData);
  expect(result[0].totalReward).toBe(98);
});
