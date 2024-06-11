import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import tradeReducer from "@/app/components/trade/service/trade.slice";
import accountReducer from "@/app/components/account/service/account-slice";
import userReducer from "@/app/components/users/service/user-slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = {
  key: "count",
  storage,
  whitelist: ["countState"],
};
const tradePersistConfig = {
  key: "trade",
  storage,
  whitelist: ["tradeState"],
};
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userState"],
};
const accountPersistConfig = {
  key: "account",
  storage,
  whitelist: ["accountState"],
};


const persistedTradeReducer = persistReducer(tradePersistConfig, tradeReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedaccountReducer = persistReducer(accountPersistConfig, accountReducer);

export const rootReducer = combineReducers({
  trade: persistedTradeReducer,
  user: persistedUserReducer,
  account: persistedaccountReducer
});

