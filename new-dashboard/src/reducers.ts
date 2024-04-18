// reducers.ts
// import { combineReducers } from 'redux';
// import { UpdateWidgetDataAction, UPDATE_WIDGET_DATA } from './actions';

// interface WidgetState {
//   data: any;
// }

// interface AppState {
//   widgets: { [widgetId: string]: WidgetState };
// }

// const initialState: AppState = {
//   widgets: {},
// };

// const widgetReducer = (state: AppState['widgets'] = initialState.widgets, action: UpdateWidgetDataAction) => {
//   switch (action.type) {
//     case UPDATE_WIDGET_DATA:
//       const { widgetId, data } = action.payload;
//       return {
//         ...state,
//         [widgetId]: {
//           ...state[widgetId],
//           data,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   widgets: widgetReducer,
// });

import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { updateWidgetData } from './actions';

interface WidgetState {
  data: any;
}

const initialState: { [widgetId: string]: WidgetState } = {};

const widgetsReducer = createReducer(initialState, builder => {
  builder.addCase(updateWidgetData, (state, action) => {
    const { widgetId, data } = action.payload;
    if (state[widgetId]) {
      state[widgetId].data = data;
    }
  });
});

const rootReducer = combineReducers({
  widgets: widgetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
