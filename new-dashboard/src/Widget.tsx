// // Widget.tsx
// import React from 'react';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import { AppState } from './reducers';
// import { updateWidgetData } from './actions';

// interface WidgetProps {
//   title: string;
//   widgetId: string;
//   data: any;
//   updateWidgetData: typeof updateWidgetData;
// }

// const Widget: React.FC<WidgetProps> = ({ title, data, updateWidgetData, widgetId }) => {
//   // Lokális állapotok típusa
//   const [localState, setLocalState] = React.useState<any>({});

//   // Adatok frissítése
//   const handleUpdateData = (newData: any) => {
//     updateWidgetData(widgetId, newData);
//   };

//   return (
//     <div className="widget">
//       <h2>{title}</h2>
//       <div className="widget-content">
//         {/* Widget tartalma */}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state: AppState, ownProps: { widgetId: string }) => ({
//   data: state.widgets[ownProps.widgetId]?.data,
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   updateWidgetData: (widgetId: string, data: any) => dispatch(updateWidgetData(widgetId, data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Widget);

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducers';
import { updateWidgetData } from './actions';

interface WidgetProps {
  title: string;
  widgetId: string;
}

const Widget: React.FC<WidgetProps> = ({ title, widgetId, children }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.widgets[widgetId]?.data);

  const handleUpdateData = (newData: any) => {
    dispatch(updateWidgetData({ widgetId, data: newData }));
  };

  return (
    <div className="widget">
      <h2>{title}</h2>
      <div className="widget-content">{children}</div>
    </div>
  );
};

export default Widget;
