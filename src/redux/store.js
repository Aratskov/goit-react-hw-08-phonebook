import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contact';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'todo',
  storage,
  blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactReducer
);

export const store = configureStore({
  reducer: {
    contact: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
