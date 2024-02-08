import { createEvent, createStore } from "effector";

type UpdateStoreType = {
  name: string;
  email: string;
  phoneNumber: string;
};

type SignUpStoreType = {
  name?: string;
  email?: string;
  phoneNumber?: string;
};

export const updateStoreEvent = createEvent<UpdateStoreType>();

export const resetStore = createEvent();

export const signUpStore = createStore<SignUpStoreType>({})
  .on(updateStoreEvent, (store, params) => {
    return { ...store, ...params };
  })
  .on(resetStore, (_store) => {});
