import { createAction } from '@reduxjs/toolkit';

export const updateWidgetData = createAction<{ widgetId: string; data: any }>('updateWidgetData');
