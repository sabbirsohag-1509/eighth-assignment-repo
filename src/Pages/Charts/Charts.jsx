import React from 'react';

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const Charts = ({ratings}) => {
    // const chartData = useLoaderData();
    // console.log(ratings)
    
    return (
         <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
        
          layout="vertical"
          width={500}
          height={400}
          data={ratings}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="none" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed/> 
          <Tooltip />
          {/* <Legend /> */}
          {/* <Area dataKey="name" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="count" barSize={20} fill="#FF8811" />
          {/* <Line dataKey="count" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    
    );
};

export default Charts;