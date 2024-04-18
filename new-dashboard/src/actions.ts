// actions.ts
// export const UPDATE_WIDGET_DATA = 'UPDATE_WIDGET_DATA';

// export interface UpdateWidgetDataAction {
//   type: typeof UPDATE_WIDGET_DATA;
//   payload: { widgetId: string; data: any };
// }

// export const updateWidgetData = (widgetId: string, data: any): UpdateWidgetDataAction => ({
//   type: UPDATE_WIDGET_DATA,
//   payload: { widgetId, data },
// });
import { createAction } from '@reduxjs/toolkit';
export const updateWidgetData = createAction<{ widgetId: string; data: any }>('updateWidgetData');
