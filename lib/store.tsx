import { configureStore } from '@reduxjs/toolkit';  // yeh function redux create store create karane me help krta h 
// import authReducer from './authSlice';    //          // yaha hum authentication ke ek slice ko import kr rhe .
import authReducer from '../features/auth/authslice'
export const store = configureStore({              // yaha yeh function redux store kr rha  and tell it to manage auth slice using authReducer.
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




//concept ->
//this is brain of redux , where all states are combined .

//some basic concepts ->
//redux :-> components data are stored here to be fetched
// auth :-> verification , login karte wakt hum jo data dete h woh backend me jake fetch hota h ki wahi use rh ya nhi .
// auth reducer -> redux concept,it tells after x action or after this action, how state will changed.
/////-> this is that logic which handles request related to auth.

// jaise manlo loginstart ho gya yani true
// login sucess ho gya(true)
//loginfailed ->error set ho gya.


//exmaple se smajhte h
// socho redux ek locker room h
// har lock = ek state(auth, cart, setting)
//har key = loginkey , logout (action0)
//reducer = woh guard jo batayega ki kis key se kya khulega.
