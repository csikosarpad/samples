// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
// import Widget from './Widget';

// const store = createStore(rootReducer);

// const Dashboard: React.FC = () => {
//     const grafikonAdatok = [
//         { name: 'Jan', value: 220 },
//         { name: 'Feb', value: 320 },
//         { name: 'Mar', value: 240 },
//         // További adatok...
//     ];

//     return (
//         <Provider store={store}>
//             <div className="dashboard">
//                 <Widget title="Widget 1" widgetId="widget1" />
//                 <Widget title="Widget 2" widgetId="widget2" />
//                 {/* További widget komponensek */}
//             </div>
//         </Provider>
//     );
// };

// export default Dashboard;

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import GrafikonWidget from './GrafikonWidget';

const store = configureStore({
    reducer: rootReducer,
});

const Dashboard: React.FC = () => {
    const grafikonAdatok = [
        { name: 'Jan', value: 220 },
        { name: 'Feb', value: 320 },
        { name: 'Mar', value: 240 },
        { name: 'April', value: 440 },
        { name: 'May', value: 480 },
        // További adatok...
    ];

    return (
        <Provider store={store}>
            <div className="dashboard">
                <GrafikonWidget data={grafikonAdatok} title="Grafikon" widgetId="grafikonWidget" />
                <GrafikonWidget data={grafikonAdatok} title="Grafikon2" widgetId="grafikonWidget2" />
                <GrafikonWidget data={grafikonAdatok} title="Grafikon3" widgetId="grafikonWidget3" />
                {/* További widget komponensek */}
            </div>
        </Provider>
    );
};

export default Dashboard;
