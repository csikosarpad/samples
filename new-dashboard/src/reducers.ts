import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WidgetState {
  data: any;
}

const initialState: { [widgetId: string]: WidgetState } = {};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    updateWidgetData: (state, action: PayloadAction<{ widgetId: string; data: any }>) => {
      const { widgetId, data } = action.payload;
      if (state[widgetId]) {
        state[widgetId].data = data;
      }
    },
    // További reducer műveletek, pl. stílus frissítése stb.
  },
});

export const { updateWidgetData } = widgetsSlice.actions;
export const widgetsReducer = widgetsSlice.reducer;
