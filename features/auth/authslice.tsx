import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  // yha create slice  and createAsyncThunk (method h jo api call->async action handle krta h)import ho rha 
import axios from 'axios';

interface AuthState {  
  user: any | null;  // user data ya phir null(jb login nhi ho rha )
  token: string | null;  //yha jwt token ya phir google auth token ki baat ho rhoi h
  loading:boolean;      //jb login process ke liye user data enter kar rha h
  error:string|null;  // ager login fail ho jaye tb
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading:false, //false small letter me rhega
  error:null,
};
//yeh tb ka state h jb koi login nahi ho rha h


// yeh jo part h woh async login process ke liye REDUXTOOLKIT ke liye createAsyncThunk ka use krta h
export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/login', data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
//loginUser ek action h jo async call krega login ke liye. 
//data ko ek block samjhna ko email and password lega , rejectWithVlaue jo vhi err aayegi yha uske sath deal krega 

// esme do cheez h 1. try -> esme axios.post [api call krega backend ko route pe], data toh pata hi h and res.data kya krega >>ager login successful hogya thik-> toh response aayega 
// 2. catch [ager api -> fail ho jaye to error ke sath deal krega, reject with value ko return krega-> toh esme  rejected action dispatch hoga custom errors ke sath , matlab jaisa error waisa response ..understood ]


// ab yeh dekho redux state ka main contoller yha se banega 
// redux store ke ander auth naam ka slice bnega. aur phle se defined state hoga(user, token ,login)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;       //logout krne pe sara user dddata gayab ho jata h n yeh tb ke liye h
      state.token = null;      //yeh ek synchronous reducer h jo user and token dono ko null kr rha thik 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;  //yeh jo part h pura section exraReducer ka yeh redux toolkit ka ek feature h
      // jisme hum createAsyncThunk -> ka use kr rhe alag alag states (pending, fulfilled , rejected) ko handle krte h
      // maine bs abhi fulffilled wala hi banaya h .// builder multiple cases handle krne deta h
      //yeh async function ko bhi handle krta h.
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;



//main_concept
// createSlice -. redux toolkit ka function hain jo:
// 1. initial state.
// 2. reducer ->function ke state ko update karega
// 3. aur us reducer ka naam

// createSlice -> yeh ek chef h ... jo particular fix menu banata h
//createAuthThunk delivery boy h jo data ko lekar destination tk pahuchayega
