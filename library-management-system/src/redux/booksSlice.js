import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('/api/books/'); // Replace with your API endpoint
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export default booksSlice.reducer;
