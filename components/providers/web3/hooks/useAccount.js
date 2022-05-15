export const handler = (web3) => () => {
  console.log(web3);
  return {
    account: web3 ? "Test Account" : "null",
  };
};
