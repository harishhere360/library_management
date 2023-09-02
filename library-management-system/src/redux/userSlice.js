import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get('/api/users/1'); // Replace with your API endpoint and user ID
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { user: {} },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
