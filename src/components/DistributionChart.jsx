import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Documents', value: 45 },
  { name: 'Images', value: 30 },
  { name: 'Video', value: 15 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#64748b'];

export default function DistributionChart() {
  return (
    <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <h3 className="font-semibold text-slate-900 dark:text-white mb-6">File Distribution</h3>
      
      <div className="relative flex-1 flex flex-col justify-center items-center min-h-[250px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
          <p className="text-3xl font-bold text-slate-900 dark:text-white">1.2M</p>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">Total Files</p>
        </div>
        
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={95}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
              cornerRadius={4}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#0f172a', fontWeight: 500 }}
              formatter={(value) => [`${value}%`, undefined]}
            />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-4 w-full px-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
