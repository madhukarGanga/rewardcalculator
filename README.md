## Reward calculator

### How to run

- `npm install`
- Add test data in `transactions` array in `testData.js`.
  each transaction should have below format:

  ```
  {
      custId: <customerId>,
      transDate: <transaction date in dd-MMM-yyyy format>,
      transactionValue: transaction amount, only interger value
  }
  ```

- `node rewardcalculator.js`
- this will produce result containing array of object contains one entry for each customer in below format

  ```
  {
    "custId": <custmoer id>,
    <month1>: <reward point for month1>,
    <month2>: <reward point for month2>,
    ...
    ...
    "totalReward": <total reward for the customer>
  }

  ```

### Unit test case

To run unit test case execute below:

`npm test`
