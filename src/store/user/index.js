import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banned: false,
  email: null,
  first_name: null,
  id: null,
  last_name: null,
  password: null,
  reg_date: null,
  role: "user",
  sugar: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    authenticateUser: (state, action) => {
      return action.payload;
    },
    reset: (state) => initialState,
  },
});

const { authenticateUser, reset } = userSlice.actions;

export default userSlice.reducer;

export { authenticateUser, reset };
