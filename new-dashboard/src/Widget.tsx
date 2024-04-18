import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWidgetData } from './reducers';

interface WidgetProps {
  title: string;
  widgetId: string;
}

const Widget: React.FC<WidgetProps> = ({ title, widgetId, children }) => {
  const dispatch = useDispatch();

  const handleUpdateData = (newData: any) => {
    dispatch(updateWidgetData({ widgetId, data: newData }));
  };

  return (
    <div className="widget">
      <h2>{title}</h2>
      <div className="widget-content" onClick={handleUpdateData}>{children}</div>
    </div>
  );
};

export default Widget;
