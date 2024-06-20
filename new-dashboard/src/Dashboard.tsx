import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { widgetsReducer } from './reducers';
import GrafikonWidget from './GrafikonWidget';

const store = configureStore({
    reducer: {
        widgets: widgetsReducer,
    },
});

const Dashboard: React.FC = () => {
    const grafikonAdatok = [
        { name: 'Jan', value: 220 },
        { name: 'Feb', value: 320 },
        { name: 'Mar', value: 240 },
        // További adatok...
    ];
    const grafikonAdatok2 = [
        { name: 'Január', value: 150 },
        { name: 'Február', value: 220 },
        { name: 'Március', value: 280 },
        // További adatok...
    ];
    const grafikonAdatok3 = [
        { name: 'Január', value: 150 },
        { name: 'Február', value: 220 },
        { name: 'Március', value: 280 },
        { name: 'Április', value: 150 },
        { name: 'Május', value: 320 },
        { name: 'Június', value: 480 },
        // További adatok...
    ];

    return (
        <Provider store={store}>
            <div className="dashboard">
                <GrafikonWidget data={grafikonAdatok} widgetId="grafikonWidget" title="Grafikon Widget 1" />
                <GrafikonWidget data={grafikonAdatok2} widgetId="grafikonWidget2" title="Grafikon Widget 2" />
                <GrafikonWidget data={grafikonAdatok3} widgetId="grafikonWidget3" title="Grafikon Widget 3" />
                {/* További widget komponensek */}
            </div>
        </Provider>
    );
};

export default Dashboard;
