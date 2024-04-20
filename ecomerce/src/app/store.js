import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/CartSlice'
import orderReducer from '../features/orders/OrderSlice'
import userReducer from '../features/user/userSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth : authReducer,
    cart : cartReducer,
    order : orderReducer,
    user : userReducer
  },
});