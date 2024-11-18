import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice"
import storage from 'redux-persist/lib/storage'
// import rootReducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items', 'totalQuantity', 'totalPrice'],
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart : persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions with functions or non-serializable values
        ignoredActions: ['persist/PERSIST', 'yourActionType'], // Example: Ignore certain actions
        ignoredActionPaths: ['payload.register'], // Example: Ignore specific paths in action
      },
    }),
});

export const persistor = persistStore(store)