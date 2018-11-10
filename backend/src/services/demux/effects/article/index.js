import createArticle from "./createarticle";

const account = process.env.EOSIO_CONTRACT_ACCOUNT;

export default [
  {
    actionType: `${account}::newarticle`, // account::action name
    effect: createArticle
  }
];
