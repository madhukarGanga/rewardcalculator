const { allTransactions } = require("./testData");
const { parse, format } = require("date-fns");

const getRewardForTransaction = (transactionAmount) => {
  const for100 = Math.max(0, (transactionAmount - 100) * 2);
  const for50 = Math.max(
    0,
    transactionAmount >= 100 ? 50 : transactionAmount - 50
  );

  return for100 + for50;
};

const getRewardsByCustomer = (transactions) => {
  const result = {};
  transactions.forEach((transaction) => {
    const dateKey = format(
      parse(transaction.transDate, "dd-MMM-yyyy", new Date()),
      "MMM-yy"
    );
    const custDetails = result[transaction.custId] || {
      custId: transaction.custId,
    };
    const monthReward = custDetails[dateKey] || 0;
    const totalReward = custDetails.totalReward || 0;
    const curTransactionReward = getRewardForTransaction(
      transaction.transactionValue
    );
    const updatedCustDetails = {
      ...custDetails,
      [dateKey]: monthReward + curTransactionReward,
      totalReward: totalReward + curTransactionReward,
    };
    result[transaction.custId] = updatedCustDetails;
  });
  return Object.values(result);
};

const rewardsByCustomer = getRewardsByCustomer(allTransactions);
console.log(JSON.stringify(rewardsByCustomer, null, 2));
module.exports = {
  getRewardForTransaction,
  getRewardsByCustomer,
};
