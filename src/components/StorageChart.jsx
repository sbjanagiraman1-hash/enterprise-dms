import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ChevronDown } from 'lucide-react';

export default function StorageChart() {
  const [timeRange, setTimeRange] = useState('30 Days');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Sample data points for Storage Growth chart
  const chartData = [
    { label: 'Week 1', val: 32.1, display: '32.1 TB' },
    { label: 'Week 2', val: 36.4, display: '36.4 TB' },
    { label: 'Week 3', val: 39.8, display: '39.8 TB' },
    { label: 'Week 4', val: 42.0, display: '42.0 TB' },
    { label: 'Today', val: 45.2, display: '45.2 TB' },
  ];

  // SVG viewBox coordinates
  const svgWidth = 320;
  const svgHeight = 120;
  const padding = 20;

  const minVal = 25;
  const maxVal = 50;

  const getCoords = (data) => {
    return data.map((pt, i) => {
      const x = padding + (i / (data.length - 1)) * (svgWidth - 2 * padding);
      const y = svgHeight - padding - ((pt.val - minVal) / (maxVal - minVal)) * (svgHeight - 2 * padding);
      return { x, y, pt };
    });
  };

  const points = getCoords(chartData);

  // Generate SVG path string
  const pathD = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
  }, '');

  // Closed area path string for gradient fill
  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight} L ${points[0].x} ${svgHeight} Z`;

  return (
    <div className="px-4 py-2">
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                Storage Growth
              </h4>
              <span className="text-[10px] text-emerald-600 font-semibold">+14.2% growth rate</span>
            </div>
          </div>

          {/* Time Range Dropdown */}
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="appearance-none bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold px-2.5 py-1 pr-6 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="7 Days">7 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="90 Days">90 Days</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-1.5 top-2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* SVG Area & Line Chart */}
        <div className="relative pt-2">
          {hoveredPoint && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-0 right-2 bg-slate-900 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow z-10"
            >
              {hoveredPoint.pt.label}: <span className="text-blue-400 font-bold">{hoveredPoint.pt.display}</span>
            </motion.div>
          )}

          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-28 overflow-visible">
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Gradient Area Fill */}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              d={areaD}
              fill="url(#blueGradient)"
            />

            {/* Main Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              d={pathD}
              fill="none"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Data Point Dots */}
            {points.map((pt, idx) => (
              <g key={idx}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="4"
                  className="fill-white dark:fill-slate-900 stroke-blue-600 stroke-[2.5] cursor-pointer hover:r-6 transition-all"
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              </g>
            ))}
          </svg>

          {/* X Axis Labels */}
          <div className="flex justify-between px-2 text-[10px] font-semibold text-slate-400 dark:text-slate-500 pt-1">
            {chartData.map((d, i) => (
              <span key={i}>{d.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
