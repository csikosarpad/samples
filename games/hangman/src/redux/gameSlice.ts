import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GAME, MESSAGES } from '../utils/constans'
import { DICTIONARY } from '../utils/dictionary.json';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

let defaultDictionary: string[] | null = [];
let dictionary: string[] = [];

if (!localStorage.getItem(GAME.STORAGE_NAME)) {
  defaultDictionary = DICTIONARY;
  localStorage.setItem(GAME.STORAGE_NAME, defaultDictionary.toString());
} else {
  defaultDictionary = localStorage.getItem(GAME.STORAGE_NAME).split(',');
}

const reset = () => dictionary = [...defaultDictionary];
reset();

export const sorsol = () => {
  if (dictionary.length > 0) {
    const szotarIndex = parseInt(Math.random() * dictionary.length, 10);
    const megoldando = dictionary[szotarIndex];
    let kiiras = [];
    dictionary = dictionary.filter((item) => item != megoldando);
    kiiras = megoldando.split('').map(() => '_');
    return [megoldando, kiiras];
  } else {
    return MESSAGES.FINISH;
  }
}

type TKereso = {
  szo: string,
  megoldando: string[],
  letter: string
}

export const betukereso = ({ szo, megoldando, letter }: TKereso): string[] => {
  return megoldando = szo.split('').map((item: string, index: number) => {
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
  dictionary: dictionary,
  tips: new Set(),
  letter: '',
  existsMessage: '',
  data: {},
  status: 'idle',
  error: ''
};

export const fetchData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const gameSlice = createSlice({
  name: 'hangmanGame',
  initialState: initialState,
  reducers: {
    addTips: (state, action) => {
      const char = action.payload;
      console.log(state.tips)
      /*if (state.tips.has(char)) {
        state.existsMessage = `${MESSAGES.EXISTED_CHAR} ${char}`;
      } else {
        state.existsMessage = ``;
        state.tips = new Set([...state.tips, char]);
        state.letter = char;
      }*/
    },
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
        state.error = action.error.message || '';
      });
  },
});

const gameReducer = gameSlice.reducer;

export const { setPage, addTips } = gameSlice.actions;

export default gameReducer;
