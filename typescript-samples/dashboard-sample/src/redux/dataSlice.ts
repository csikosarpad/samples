import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

const initialState = {
  actStyle: 'dark',
  data: {},
  status: 'idle',
};

export const fetchData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const dataSlice = createSlice({
  name: 'dataTable',
  initialState: initialState,
  reducers: {
    setPage: (state, action) => {
      state.actStyle = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const dataTableReducer = dataSlice.reducer;

export const { setPage } = dataSlice.actions;

export default dataTableReducer;
