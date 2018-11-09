import createArticle from "./createarticle";
import editArticle from "./editarticle";

const account = process.env.EOSIO_CONTRACT_ACCOUNT;

export default [
  {
    actionType: `${account}::createarticle`, // account::action name
    effect: createArticle
  },
  {
    actionType: `${account}::editarticle`,
    effect: editArticle
  }
];
