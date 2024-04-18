import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Widget from './Widget';

interface GrafikonWidgetProps {
    title: string;
    widgetId: string;
    data: { name: string; value: number }[];
}

const GrafikonWidget: React.FC<GrafikonWidgetProps> = ({ data, title, widgetId }) => {
    return (
        <Widget title={title} widgetId={widgetId}>
            <LineChart width={400} height={300} data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </Widget>
    );
};

export default GrafikonWidget;
