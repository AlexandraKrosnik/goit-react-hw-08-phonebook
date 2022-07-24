import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import filterReducer from './filter/filterSlice';
import { contactsApi } from './contacts/contactsApi';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV !== 'production',
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
