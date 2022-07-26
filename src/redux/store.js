import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

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

import filterReducer from './filter/filterSlice';

import { authReducer } from './auth';
import { contactsReducer } from './contacts';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   [contactsApi.reducerPath]: contactsApi.reducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,

    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],

  devTools: process.env.NODE_ENV !== 'production',
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
