import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GAME, MESSAGES } from '../utils/constans'
import { DICTIONARY } from '../utils/dictionary.json';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

let alapszotar: string[] = [];
let szotar: string[] = [];

if (!localStorage.getItem(GAME.STORAGE_NAME)) {
  alapszotar = DICTIONARY;
  localStorage.setItem(GAME.STORAGE_NAME, alapszotar.toString());
} else {
  alapszotar = localStorage.getItem(GAME.STORAGE_NAME).split(',');
}

const reset = () => szotar = [...alapszotar];
reset();

export const sorsol = () => {
  if (szotar.length > 0) {
    const kiiras = [];
    const megoldando = szotar[parseInt(Math.random() * szotar.length, 10)];
    szotar = szotar.filter((item) => item != megoldando);
    megoldando.split('').forEach((item) => kiiras.push('_'));
    return [megoldando, kiiras];
  } else {
    return MESSAGES.FINISH;
  }
}

export const betukereso = ({ szo, megoldando, letter }) => {
  return megoldando = szo.split('').map((item, index) => {
    let ret = megoldando[index]
    if (item === letter) {
      ret = letter
    } else {
      ret = megoldando[index];
    }
    return ret;
  });
}


const initialState = {
  actStyle: 'dark',
  data: {},
  status: 'idle',
};

export const fetchData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const gameSlice = createSlice({
  name: 'hangmanGame',
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

const gameReducer = gameSlice.reducer;

export const { setPage } = gameSlice.actions;

export default gameReducer;
